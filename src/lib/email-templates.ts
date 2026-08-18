const SITE_URL = "https://sabeesoft.com";
const LOGO_URL = `${SITE_URL}/brand/lockup/sabeesoft-lockup-horizontal-dark.svg`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function paragraphsHtml(text: string) {
  return text
    .split("\n\n")
    .map(
      (block) =>
        `<p style="margin:0 0 16px;color:#e6ebf0;font-size:15px;line-height:1.6;">${escapeHtml(
          block
        ).replace(/\n/g, "<br>")}</p>`
    )
    .join("");
}

function shell({ preheader, bodyHtml }: { preheader: string; bodyHtml: string }) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#080c10;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080c10;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
            <tr>
              <td bgcolor="#004D7F" style="background-color:#004D7F;background-image:linear-gradient(150deg,#03293F 0%,#004D7F 55%,#0A7E93 100%);border-radius:12px 12px 0 0;padding:28px 32px;">
                <img src="${LOGO_URL}" width="150" height="30" alt="Sabeesoft" style="display:block;border:0;" />
              </td>
            </tr>
            <tr>
              <td bgcolor="#0B1C28" style="background-color:#0B1C28;border:1px solid rgba(255,255,255,0.12);border-top:0;padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 8px 0;font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:12px;color:rgba(230,235,240,0.45);">
                Sabeesoft &middot; Budapest, Hungary &middot; <a href="${SITE_URL}" style="color:rgba(230,235,240,0.45);">sabeesoft.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function notificationEmailHtml(submission: {
  name: string;
  email: string;
  kind: string;
  message: string;
  locale: string;
}) {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:4px 0;font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#00C4C9;vertical-align:top;white-space:nowrap;padding-right:16px;">${escapeHtml(
        label
      )}</td>
      <td style="padding:4px 0;font-size:15px;color:#e6ebf0;">${escapeHtml(value)}</td>
    </tr>`;

  const bodyHtml = `
    <h1 style="margin:0 0 20px;font-size:20px;color:#ffffff;">New inquiry: ${escapeHtml(
      submission.kind
    )}</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      ${row("Name", submission.name)}
      ${row("Email", submission.email)}
      ${row("Locale", submission.locale)}
    </table>
    <div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:16px;">
      <p style="margin:0;font-size:15px;line-height:1.6;color:#e6ebf0;white-space:pre-wrap;">${escapeHtml(
        submission.message
      )}</p>
    </div>`;

  return shell({ preheader: `New inquiry from ${submission.name}`, bodyHtml });
}

export function notificationEmailText(submission: {
  name: string;
  email: string;
  kind: string;
  message: string;
  locale: string;
}) {
  return `Name: ${submission.name}\nEmail: ${submission.email}\nKind: ${submission.kind}\nLocale: ${submission.locale}\n\n${submission.message}`;
}

export function confirmationEmailHtml(submission: { name: string; body: string }) {
  const bodyHtml = paragraphsHtml(submission.body.replace("{name}", submission.name));
  return shell({ preheader: submission.body.split("\n")[0], bodyHtml });
}

export function confirmationEmailText(submission: { name: string; body: string }) {
  return submission.body.replace("{name}", submission.name);
}
