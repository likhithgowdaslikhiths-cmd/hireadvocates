// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// ─── Google Sheets Setup ───────────────────────────────────────────
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

async function appendToGoogleSheet(data: {
  name: string;
  phone: string;
  state: string;
  location: string;
  caseType: string;
}) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          timestamp,
          data.name,
          data.phone,
          data.state || "Not specified",
          data.location || "Not specified",
          data.caseType || "General",
        ],
      ],
    },
  });
}

// ─── Email Transporter ─────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "info@hireadvocates.com",
    pass: process.env.SMTP_PASS,
  },
});

// ─── POST Handler ──────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, state, location, caseType } = body;

    // Validation
    if (!name || !phone || name.trim().length < 2 || !phone.match(/^\d{10,12}$/)) {
      return NextResponse.json(
        { success: false, error: "Name (min 2 chars) and valid 10-digit phone required" },
        { status: 400 }
      );
    }

    // ── 1. Notify Admin ───────────────────────────────────────────
    const adminMail = {
      from: '"Hire Advocates" <info@hireadvocates.com>',
      to: "info@hireadvocates.com",
      subject: `🧑‍⚖️ New Lawyer Request - ${state || "India"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3c6e;">🧑‍⚖️ New Lawyer Request</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>State:</strong> ${state || "Not specified"}</p>
            <p><strong>Location:</strong> ${location || "Not specified"}</p>
            <p><strong>Case Type:</strong> ${caseType || "General"}</p>
          </div>
          <p style="color: #7f8c8d; font-size: 14px;">
            Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </p>
        </div>
      `,
    };

    // ── 2. Confirmation to User (only if email provided) ──────────
    const userMail = email
      ? {
          from: '"Hire Advocates" <info@hireadvocates.com>',
          to: email,
          subject: "✅ We've Received Your Request – Hire Advocates",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              
              <!-- Header -->
              <div style="background: #1a3c6e; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center;">
                <h1 style="color: #fff; margin: 0; font-size: 22px;">⚖️ Hire Advocates</h1>
                <p style="color: #a0b4cc; margin: 6px 0 0; font-size: 13px;">India's Trusted Legal Connection</p>
              </div>

              <!-- Body -->
              <div style="background: #ffffff; padding: 30px 24px; border: 1px solid #e2e8f0;">
                <h2 style="color: #1a3c6e; margin-top: 0;">Hi ${name}, we've got your request! 👋</h2>
                <p style="line-height: 1.7; color: #444;">
                  Thank you for reaching out to <strong>Hire Advocates</strong>. Our team will review your case 
                  details and connect you with the most suitable advocate shortly.
                </p>

                <!-- Summary Box -->
                <div style="background: #f0f4ff; border-left: 4px solid #1a3c6e; padding: 16px 20px; border-radius: 4px; margin: 24px 0;">
                  <p style="margin: 0 0 8px; font-weight: bold; color: #1a3c6e;">📋 Your Submission Summary</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Phone:</strong> ${phone}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>State:</strong> ${state || "Not specified"}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${location || "Not specified"}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Case Type:</strong> ${caseType || "General"}</p>
                </div>

                <p style="line-height: 1.7; color: #444;">
                  Expect a call or email from us within <strong>24 hours</strong>. 
                  If you need immediate assistance, feel free to reach us at 
                  <a href="mailto:info@hireadvocates.com" style="color: #1a3c6e;">info@hireadvocates.com</a>.
                </p>

                <div style="text-align: center; margin-top: 28px;">
                  <a href="https://hireadvocates.com" 
                     style="background: #1a3c6e; color: white; padding: 12px 28px; border-radius: 6px; 
                            text-decoration: none; font-weight: bold; font-size: 14px;">
                    Visit Our Website
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f8f9fa; padding: 16px 24px; border-radius: 0 0 8px 8px; 
                          text-align: center; border: 1px solid #e2e8f0; border-top: none;">
                <p style="color: #999; font-size: 12px; margin: 0;">
                  © ${new Date().getFullYear()} HireAdvocates.com · This is an automated confirmation.
                </p>
              </div>
            </div>
          `,
        }
      : null;

    // ── 3. Run all tasks in parallel ──────────────────────────────
    const tasks: Promise<any>[] = [
      transporter.sendMail(adminMail),
      appendToGoogleSheet({ name, phone, state, location, caseType }),
    ];

    if (userMail) tasks.push(transporter.sendMail(userMail));

    await Promise.all(tasks);

    return NextResponse.json({
      success: true,
      message: "Request submitted! We'll connect you soon.",
    });

  } catch (error: any) {
    console.error("❌ API Error:", error);

    if (error.code === "EAUTH") {
      return NextResponse.json(
        { success: false, error: "SMTP authentication failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}