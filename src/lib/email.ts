import { Resend } from "resend";
import {
  confirmationEmailHtml,
  confirmationEmailText,
  notificationEmailHtml,
  notificationEmailText,
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL!;
const TO = process.env.CONTACT_TO_EMAIL!;

// Customer-facing sender identity.
const CUSTOMER_FROM = `Sabeesoft <${FROM_ADDRESS}>`;
// Internal alerts get a bracketed name so they stand out from customer mail in the inbox.
const INTERNAL_FROM = `"[Sabeesoft]" <${FROM_ADDRESS}>`;

export async function sendInternalNotification(submission: {
  name: string;
  email: string;
  kind: string;
  message: string;
  locale: string;
}) {
  const { error } = await resend.emails.send({
    from: INTERNAL_FROM,
    to: TO,
    replyTo: submission.email,
    subject: `[Sabeesoft] New inquiry: ${submission.kind}`,
    html: notificationEmailHtml(submission),
    text: notificationEmailText(submission),
  });
  if (error) throw error;
}

export async function sendConfirmation(submission: {
  name: string;
  email: string;
  subject: string;
  body: string;
}) {
  const { error } = await resend.emails.send({
    from: CUSTOMER_FROM,
    to: submission.email,
    subject: submission.subject,
    html: confirmationEmailHtml(submission),
    text: confirmationEmailText(submission),
  });
  if (error) throw error;
}
