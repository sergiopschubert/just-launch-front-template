import { ConfirmationEmailTemplate } from '@/app/shared/@JustLaunch/emails/EmailTemplates/ConfirmationEmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_KEY as string);

export async function POST(req: Request) {
  try {
    const { firstName, email, id, subject, intlEmail } = await req.json();

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: [email],
      subject: subject,
      react: ConfirmationEmailTemplate({
        firstName: firstName,
        email: email,
        confirmationUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/confirmation-email/${id}`,
        intlEmail: intlEmail,
        domain: process.env.EMAIL_DOMAIN as string,
      }),
      text: '',
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
