import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  cleanText,
  escapeHtml,
  guardPublicPost,
  isValidEmail,
} from "@/lib/request-security";

const destinationEmail =
  process.env.CONTACT_FORM_TO_EMAIL?.trim() || "tutoringforthedeaf@gmail.com";
const senderEmail =
  process.env.CONTACT_FORM_FROM_EMAIL?.trim() ||
  "Tutoring Contact Form <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  const blocked = guardPublicPost(request, {
    scope: "contact",
    limit: 8,
    maxBodyBytes: 24_000,
  });
  if (blocked) {
    return NextResponse.json({ error: blocked.error }, { status: blocked.status });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is temporarily unavailable. Please email tutoringforthedeaf@gmail.com directly.",
        },
        { status: 503 },
      );
    }

    const body = await request.json();
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const phone = cleanText(body.phone, 40);
    const yearGroup = cleanText(body.yearGroup, 40);
    const subject = cleanText(body.subject, 80);
    const usesBsl = cleanText(body.usesBsl, 100);
    const goal = cleanText(body.goal, 500);
    const preferredTimes = cleanText(body.preferredTimes, 300);
    const preferredContact = cleanText(body.preferredContact, 40);
    const heardAboutUs = cleanText(body.heardAboutUs, 200);
    const message = cleanText(body.message, 3_000);

    if (!name || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid name and email address." },
        { status: 400 },
      );
    }

    if (!heardAboutUs) {
      return NextResponse.json(
        { error: "Please tell us how you heard about us." },
        { status: 400 },
      );
    }

    const optional = (value: string) => escapeHtml(value || "Not provided");
    const { error } = await new Resend(apiKey).emails.send({
      from: senderEmail,
      to: [destinationEmail],
      replyTo: email,
      subject: `Tutoring Inquiry from ${name}`,
      html: `
        <h2>New Tutoring Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${optional(phone)}</p>
        <p><strong>Student Year Group:</strong> ${optional(yearGroup)}</p>
        <p><strong>Subject Support:</strong> ${optional(subject)}</p>
        <p><strong>Uses BSL:</strong> ${optional(usesBsl)}</p>
        <p><strong>Main Tutoring Goal:</strong> ${optional(goal)}</p>
        <p><strong>Preferred Lesson Times:</strong> ${optional(preferredTimes)}</p>
        <p><strong>Preferred Contact Method:</strong> ${optional(preferredContact)}</p>
        <p><strong>How You Heard About Us:</strong> ${escapeHtml(heardAboutUs)}</p>
        <h3>Additional Information:</h3>
        <p>${optional(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend contact delivery failed");
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send the enquiry. Please check the form and try again." },
      { status: 500 },
    );
  }
}
