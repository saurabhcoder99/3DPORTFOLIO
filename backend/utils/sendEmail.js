import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, subject, message }) => {
  // If email credentials are not configured, skip gracefully
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log(`\x1b[36m[Email Mock Notification]\x1b[0m From: ${name} <${email}> | Subject: ${subject}`);
    return { success: true, mocked: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #0b0f19; color: #e2e8f0; padding: 25px; border-radius: 10px; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
        <h2 style="color: #00f2fe; margin-top: 0;">New Message from Portfolio Website</h2>
        <hr style="border: none; border-top: 1px solid #334155; margin: 15px 0;" />
        <p><strong>Sender:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #1e293b; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #00f2fe;">
          <p style="white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #94a3b8; margin-top: 25px;">Sent from Saurabh Kumar's 3D Portfolio Platform.</p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
};
