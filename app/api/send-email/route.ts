import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, state, location, caseType } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@hireadvocates.com",
        pass: "Worex@123",
      },
    });

    const mailOptions = {
      from: '"Hire Advocates" <info@hireadvocates.com>',
      to: "info@hireadvocates.com",
      subject: "New Lawyer Request",
      html: `
        <h2>New Lawyer Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>State:</b> ${state}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Case Type:</b> ${caseType}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false, error });
  }
}