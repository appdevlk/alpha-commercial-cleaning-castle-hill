// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { firstName, lastName, phone, email, serviceType, bestTime } = await request.json();

    // Debug environment variables
    console.log('Gmail User:', process.env.GMAIL_USER);
    console.log('Gmail Password exists:', !!process.env.GMAIL_APP_PASSWORD);

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !serviceType || !bestTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if environment variables exist
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables');
      return NextResponse.json({ error: 'Server configuration error - missing email credentials' }, { status: 500 });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content for admin only
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@alphacleangroup.com.au',
      subject: `New Contact Form Submission - Alpha Clean Group - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d1d1f; border-bottom: 2px solid #007AFF; padding-bottom: 10px;">
            New Contact Form Submission from alphacleangroup.com.au
          </h2>

          <div style="background-color: #f9f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007AFF; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Best Time to Call:</strong> ${bestTime}</p>
          </div>

          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #007AFF;">
            <p style="margin: 0; color: #1d1d1f;">
              <strong>Next Steps:</strong> Contact the customer within 24 hours as promised.
            </p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #d2d2d7;">

          <p style="color: #86868b; font-size: 14px; text-align: center;">
            This email was sent from your Alpha Clean Group contact form.
          </p>
        </div>
      `,
    };

    // Send admin email only
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
