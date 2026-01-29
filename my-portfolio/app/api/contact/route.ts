import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

function validateInput(data: ContactFormData) {
  if (!data.name || !data.email || !data.message) {
    throw new Error('Name, email, and message are required');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Please enter a valid email address');
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, subject = 'New message from contact form', message } = await request.json();

    validateInput({ name, email, message });

    const emailText = `
      New contact form submission from ${name} (${email}):
      
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      This email was sent from your portfolio contact form.
    `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New contact form submission</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #666; font-size: 0.9em; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `;

    await sendEmail({
      to: 'meeramjmeera@gmail.com',
      subject: `New Contact: ${subject}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json(
      { message: errorMessage },
      { status: errorMessage.includes('required') || errorMessage.includes('valid') ? 400 : 500 }
    );
  }
}