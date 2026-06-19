import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? "");
}

export async function sendConfirmationEmail({
  customerName,
  email,
  serviceName,
  date,
  time,
  bookingId,
}: {
  customerName: string;
  email: string;
  serviceName: string;
  date: string;
  time: string;
  bookingId: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: `SBMP Bookings <bookings@smallbusinessmarketingprofessional.com>`,
    to: email,
    subject: `Booking Confirmed — ${serviceName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#080D1A;color:#E2E8F0;border-radius:12px;">
        <h1 style="color:#4F8EF7;margin-bottom:8px;">Booking Confirmed!</h1>
        <p>Hi ${customerName}, your booking is confirmed.</p>
        <div style="background:#0D1627;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px;margin:24px 0;">
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Reference:</strong> #${bookingId.slice(0, 8).toUpperCase()}</p>
        </div>
        <p style="color:#8B9CB8;font-size:14px;">We'll be in touch. Reply to this email with any questions.</p>
      </div>
    `,
  });
}

export async function sendAdminNotificationEmail({
  customerName,
  email,
  phone,
  serviceName,
  date,
  time,
  bookingId,
}: {
  customerName: string;
  email: string;
  phone: string;
  serviceName: string;
  date: string;
  time: string;
  bookingId: string;
}) {
  const resend = getResend();
  const adminEmail = process.env.ADMIN_EMAIL!;
  await resend.emails.send({
    from: `SBMP Bookings <bookings@smallbusinessmarketingprofessional.com>`,
    to: adminEmail,
    subject: `New Booking — ${serviceName} from ${customerName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
        <h2>New Booking Received</h2>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>ID:</strong> ${bookingId}</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/bookings/${bookingId}" style="display:inline-block;background:#4F8EF7;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;margin-top:16px;">View Booking</a>
      </div>
    `,
  });
}

export async function sendCancellationEmail({
  customerName,
  email,
  serviceName,
  date,
  time,
}: {
  customerName: string;
  email: string;
  serviceName: string;
  date: string;
  time: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: `SBMP Bookings <bookings@smallbusinessmarketingprofessional.com>`,
    to: email,
    subject: `Booking Cancelled — ${serviceName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#080D1A;color:#E2E8F0;border-radius:12px;">
        <h1 style="color:#FB923C;">Booking Cancelled</h1>
        <p>Hi ${customerName}, your booking has been cancelled.</p>
        <div style="background:#0D1627;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px;margin:24px 0;">
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        <p>Please <a href="${process.env.NEXT_PUBLIC_APP_URL}/book" style="color:#4F8EF7;">rebook</a> if you need a new appointment.</p>
      </div>
    `,
  });
}

export async function sendReminderEmail({
  customerName,
  email,
  serviceName,
  date,
  time,
}: {
  customerName: string;
  email: string;
  serviceName: string;
  date: string;
  time: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: `SBMP Bookings <bookings@smallbusinessmarketingprofessional.com>`,
    to: email,
    subject: `Reminder: Your appointment tomorrow — ${serviceName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#080D1A;color:#E2E8F0;border-radius:12px;">
        <h1 style="color:#4F8EF7;">Appointment Reminder</h1>
        <p>Hi ${customerName}, just a reminder about your appointment tomorrow.</p>
        <div style="background:#0D1627;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px;margin:24px 0;">
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
      </div>
    `,
  });
}
