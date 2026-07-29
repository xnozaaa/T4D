import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const destinationEmail =
  process.env.CONTACT_FORM_TO_EMAIL?.trim() || 'tutoringforthedeaf@gmail.com';
const senderEmail =
  process.env.CONTACT_FORM_FROM_EMAIL?.trim() ||
  'Tutoring Contact Form <onboarding@resend.dev>';

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error('Contact form email is not configured: RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please email tutoringforthedeaf@gmail.com directly.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const name = text(body.name);
    const email = text(body.email);
    const phone = text(body.phone);
    const yearGroup = text(body.yearGroup);
    const subject = text(body.subject);
    const usesBsl = text(body.usesBsl);
    const goal = text(body.goal);
    const preferredTimes = text(body.preferredTimes);
    const preferredContact = text(body.preferredContact);
    const message = text(body.message);

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [destinationEmail],
      replyTo: email,
      subject: `Tutoring Inquiry from ${name}`,
      html: `
        <h2>New Tutoring Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Student Year Group:</strong> ${escapeHtml(yearGroup || 'Not provided')}</p>
        <p><strong>Subject Support:</strong> ${escapeHtml(subject || 'Not provided')}</p>
        <p><strong>Uses BSL:</strong> ${escapeHtml(usesBsl || 'Not provided')}</p>
        <p><strong>Main Tutoring Goal:</strong> ${escapeHtml(goal || 'Not provided')}</p>
        <p><strong>Preferred Lesson Times:</strong> ${escapeHtml(preferredTimes || 'Not provided')}</p>
        <p><strong>Preferred Contact Method:</strong> ${escapeHtml(preferredContact || 'Not provided')}</p>
        <h3>Additional Information:</h3>
        <p>${escapeHtml(message || 'Not provided').replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
