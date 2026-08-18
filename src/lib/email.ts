import { Resend } from "resend";
import {
  confirmationEmailHtml,
  confirmationEmailText,
  notificationEmailHtml,
  notificationEmailText,
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.CONTACT_FROM_EMAIL!;
const TO = process.env.CONTACT_TO_EMAIL!;

export async function sendInternalNotification(submission: {
  name: string;
  email: string;
  kind: string;
  message: string;
  locale: string;
}) {
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: submission.email,
    subject: `New inquiry: ${submission.kind}`,
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
    from: FROM,
    to: submission.email,
    subject: submission.subject,
    html: confirmationEmailHtml(submission),
    text: confirmationEmailText(submission),
  });
  if (error) throw error;
}
