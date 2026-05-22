import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName      = formData.get('fullName') as string;
    const email         = formData.get('email') as string;
    const phone         = formData.get('phone') as string;
    const location      = formData.get('location') as string;
    const currentRole   = formData.get('currentRole') as string;
    const subjects      = formData.get('subjects') as string;
    const ageGroups     = formData.get('ageGroups') as string;
    const deafExperience= formData.get('deafExperience') as string;
    const usesBsl       = formData.get('usesBsl') as string;
    const bslLevel      = formData.get('bslLevel') as string;
    const hasQts        = formData.get('hasQts') as string;
    const isToD         = formData.get('isToD') as string;
    const hasDbs        = formData.get('hasDbs') as string;
    const experience    = formData.get('experience') as string;
    const whyJoin       = formData.get('whyJoin') as string;
    const availability  = formData.get('availability') as string;
    const cvFile        = formData.get('cv') as File | null;

    if (!fullName || !email || !experience || !whyJoin) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Build attachments array if a CV was uploaded
    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Tutoring Contact Form <onboarding@resend.dev>',
      to: ['tutoringforthedeaf@gmail.com'],
      replyTo: email,
      subject: `Tutor Application from ${fullName}`,
      attachments,
      html: `
        <h2>New Tutor Expression of Interest</h2>
        ${attachments.length > 0 ? `<p><em>CV attached: ${cvFile!.name}</em></p>` : ''}

        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Location / Time Zone:</strong> ${location || 'Not provided'}</p>
        <p><strong>Current Role:</strong> ${currentRole || 'Not provided'}</p>

        <h3>Teaching Details</h3>
        <p><strong>Subjects:</strong> ${subjects || 'Not provided'}</p>
        <p><strong>Age Groups / Key Stages:</strong> ${ageGroups || 'Not provided'}</p>

        <h3>Deaf Awareness &amp; Communication</h3>
        <p><strong>Experience with Deaf / HI Learners:</strong> ${deafExperience || 'Not provided'}</p>
        <p><strong>Uses BSL:</strong> ${usesBsl || 'Not provided'}</p>
        <p><strong>BSL Level:</strong> ${bslLevel || 'Not provided'}</p>

        <h3>Qualifications &amp; Checks</h3>
        <p><strong>QTS:</strong> ${hasQts || 'Not provided'}</p>
        <p><strong>Teacher of the Deaf:</strong> ${isToD || 'Not provided'}</p>
        <p><strong>Enhanced DBS:</strong> ${hasDbs || 'Not provided'}</p>

        <h3>Experience &amp; Motivation</h3>
        <p><strong>Teaching / Tutoring Experience:</strong><br>${experience.replace(/\n/g, '<br>')}</p>
        <p><strong>Why Join Tutoring for the Deaf:</strong><br>${whyJoin.replace(/\n/g, '<br>')}</p>
        <p><strong>Availability:</strong> ${availability || 'Not provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Recruitment email error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
