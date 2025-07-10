export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

import Success from "../success.astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  console.log("Received form data:", data);
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
        success: false,
      }),
      { status: 400 }
    );
  }

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.GMAIL_USER, // set in your .env file
      pass: import.meta.env.GMAIL_PASS, // set in your .env file
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: import.meta.env.CONTACT_RECEIVER, // set in your .env file
      subject: `[Contact Form] ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Success! Email sent.", success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email.", success: false }),
      { status: 500 }
    );
  }
};
