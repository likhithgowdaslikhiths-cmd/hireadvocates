// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const body = await req.json();
    const { name, phone, state, location, caseType } = body;

    // Input validation
    if (!name || !phone || name.trim().length < 2 || !phone.match(/^\d{10}$/)) {
      return NextResponse.json(
        { success: false, error: "Name (min 2 chars) and valid 10-digit phone required" },
        { status: 400 }
      );
    }

    // ✅ FIXED: createTransport (not createTransporter)
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "info@hireadvocates.com",
        pass: process.env.SMTP_PASS || "Worex@123",
      },
    });

    // Verify transporter connection
    await transporter.verify();

    const mailOptions = {
      from: '"Hire Advocates" <info@hireadvocates.com>',
      to: "info@hireadvocates.com",
      replyTo: `${name} <${phone}@sms.hostinger.com>`,
      subject: `New Lawyer Request - ${state || 'India'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">🧑‍⚖️ New Lawyer Request</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>State:</strong> ${state || 'Not specified'}</p>
            <p><strong>Location:</strong> ${location || 'Not specified'}</p>
            <p><strong>Case Type:</strong> ${caseType || 'General'}</p>
          </div>
          <p style="color: #7f8c8d; font-size: 14px;">
            Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: "Request submitted successfully! We'll connect you soon." 
    });

  } catch (error: any) {
    console.error("❌ Email API Error:", error);
    
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { success: false, error: "SMTP authentication failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
