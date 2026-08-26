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
const allowedFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const allowedFileExtensions = new Set(["pdf", "doc", "docx"]);

function safeFilename(value: string) {
  const cleaned = value.replace(/[^a-zA-Z0-9._ -]/g, "_").slice(0, 120);
  return cleaned || "cv";
}

export async function POST(request: NextRequest) {
  const blocked = guardPublicPost(request, {
    scope: "recruitment",
    limit: 5,
    maxBodyBytes: 5_500_000,
    windowMs: 30 * 60 * 1000,
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

    const formData = await request.formData();
    const fullName = cleanText(formData.get("fullName"), 120);
    const email = cleanText(formData.get("email"), 254).toLowerCase();
    const phone = cleanText(formData.get("phone"), 40);
    const location = cleanText(formData.get("location"), 160);
    const currentRole = cleanText(formData.get("currentRole"), 200);
    const subjects = cleanText(formData.get("subjects"), 500);
    const ageGroups = cleanText(formData.get("ageGroups"), 300);
    const deafExperience = cleanText(formData.get("deafExperience"), 40);
    const usesBsl = cleanText(formData.get("usesBsl"), 40);
    const bslLevel = cleanText(formData.get("bslLevel"), 120);
    const hasQts = cleanText(formData.get("hasQts"), 40);
    const isToD = cleanText(formData.get("isToD"), 40);
    const hasDbs = cleanText(formData.get("hasDbs"), 40);
    const experience = cleanText(formData.get("experience"), 5_000);
    const whyJoin = cleanText(formData.get("whyJoin"), 5_000);
    const availability = cleanText(formData.get("availability"), 500);
    const consent = cleanText(formData.get("consent"), 5);
    const cvValue = formData.get("cv");
    const cvFile = cvValue instanceof File ? cvValue : null;

    if (
      !fullName ||
      !isValidEmail(email) ||
      !subjects ||
      experience.length < 20 ||
      whyJoin.length < 20 ||
      consent !== "true"
    ) {
      return NextResponse.json(
        { error: "Please check the required fields and confirm your consent." },
        { status: 400 },
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    let cvFilename = "";
    if (cvFile && cvFile.size > 0) {
      const extension = cvFile.name.split(".").pop()?.toLowerCase() || "";
      if (
        cvFile.size > 5_000_000 ||
        !allowedFileTypes.has(cvFile.type) ||
        !allowedFileExtensions.has(extension)
      ) {
        return NextResponse.json(
          { error: "Your CV must be a PDF, DOC or DOCX file no larger than 5MB." },
          { status: 400 },
        );
      }

      cvFilename = safeFilename(cvFile.name);
      attachments.push({
        filename: cvFilename,
        content: Buffer.from(await cvFile.arrayBuffer()),
      });
    }

    const optional = (value: string) => escapeHtml(value || "Not provided");
    const { error } = await new Resend(apiKey).emails.send({
      from: senderEmail,
      to: [destinationEmail],
      replyTo: email,
      subject: `Tutor Application from ${fullName}`,
      attachments,
      html: `
        <h2>New Tutor Expression of Interest</h2>
        ${cvFilename ? `<p><em>CV attached: ${escapeHtml(cvFilename)}</em></p>` : ""}
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${optional(phone)}</p>
        <p><strong>Location / Time Zone:</strong> ${optional(location)}</p>
        <p><strong>Current Role:</strong> ${optional(currentRole)}</p>
        <h3>Teaching Details</h3>
        <p><strong>Subjects:</strong> ${escapeHtml(subjects)}</p>
        <p><strong>Age Groups / Key Stages:</strong> ${optional(ageGroups)}</p>
        <h3>Deaf Awareness &amp; Communication</h3>
        <p><strong>Experience with Deaf / HI Learners:</strong> ${optional(deafExperience)}</p>
        <p><strong>Uses BSL:</strong> ${optional(usesBsl)}</p>
        <p><strong>BSL Level:</strong> ${optional(bslLevel)}</p>
        <h3>Qualifications &amp; Checks</h3>
        <p><strong>QTS:</strong> ${optional(hasQts)}</p>
        <p><strong>Teacher of the Deaf:</strong> ${optional(isToD)}</p>
        <p><strong>Enhanced DBS:</strong> ${optional(hasDbs)}</p>
        <h3>Experience &amp; Motivation</h3>
        <p><strong>Teaching / Tutoring Experience:</strong><br>${escapeHtml(experience).replaceAll("\n", "<br>")}</p>
        <p><strong>Why Join Tutoring for the Deaf:</strong><br>${escapeHtml(whyJoin).replaceAll("\n", "<br>")}</p>
        <p><strong>Availability:</strong> ${optional(availability)}</p>
        <p><strong>Consent confirmed:</strong> Yes</p>
      `,
    });

    if (error) {
      console.error("Resend recruitment delivery failed");
      return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process the application. Please check the form and try again." },
      { status: 500 },
    );
  }
}
