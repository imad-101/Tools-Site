import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Sent from Free Tool Now Contact Form
    `.trim();

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      // Fallback: Log the email content for development/testing
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("To:", process.env.CONTACT_EMAIL || "your-email@example.com");
      console.log("Subject:", `Contact Form: ${validatedData.subject}`);
      console.log("Content:", emailContent);
      console.log("=== END CONTACT FORM ===");

      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      // Initialize Resend
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: "Free Tool Now <noreply@freetoolnow.com>",
        to: [process.env.CONTACT_EMAIL || "your-email@example.com"], // Replace with your actual email
        subject: `Contact Form: ${validatedData.subject}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
              <p>This message was sent from the Free Tool Now contact form.</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { message: "Failed to send email" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
