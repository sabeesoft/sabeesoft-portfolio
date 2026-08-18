"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { sql } from "@/lib/db";
import { sendConfirmation, sendInternalNotification } from "@/lib/email";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "email" | "brief" | "consent" | "form", string>>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitByIp = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitByIp.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const localeField = formData.get("locale");
  const lang = typeof localeField === "string" && isLocale(localeField) ? localeField : "en";
  const dict = getDictionary(lang).contact.form;

  // Honeypot: real users never fill this hidden field.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const startedAt = Number(formData.get("startedAt"));
  if (!startedAt || Date.now() - startedAt < 1500) {
    return { status: "error", errors: { form: dict.errors.generic } };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", errors: { form: dict.errors.generic } };
  }

  const schema = z.object({
    name: z.string().trim().min(1, dict.errors.name).max(200),
    email: z.string().trim().min(1, dict.errors.email).email(dict.errors.email).max(320),
    kind: z.string().trim().min(1),
    brief: z.string().trim().min(1, dict.errors.brief).max(5000),
    consent: z.string().refine((v) => v === "on", dict.errors.consent),
  });

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    kind: formData.get("kind"),
    brief: formData.get("brief"),
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        brief: fieldErrors.brief?.[0],
        consent: fieldErrors.consent?.[0],
      },
    };
  }

  const { name, email, kind, brief } = parsed.data;

  try {
    await sql`
      INSERT INTO contact_submissions (name, email, kind, message, locale, consent_given)
      VALUES (${name}, ${email}, ${kind}, ${brief}, ${lang}, true)
    `;
  } catch (error) {
    console.error("contact form: failed to save submission", error);
    return { status: "error", errors: { form: dict.errors.generic } };
  }

  const [notification, confirmation] = await Promise.allSettled([
    sendInternalNotification({ name, email, kind, message: brief, locale: lang }),
    sendConfirmation({
      name,
      email,
      subject: dict.confirmationEmail.subject,
      body: dict.confirmationEmail.body,
    }),
  ]);
  if (notification.status === "rejected") {
    console.error("contact form: failed to send internal notification", notification.reason);
  }
  if (confirmation.status === "rejected") {
    console.error("contact form: failed to send confirmation email", confirmation.reason);
  }

  return { status: "success" };
}
