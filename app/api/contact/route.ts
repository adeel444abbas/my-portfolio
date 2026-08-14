import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "All fields are required",
                },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>📩 New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to send email",
            },
            { status: 500 }
        );
    }
}