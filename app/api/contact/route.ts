import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, message } = await req.json();

  const formData: FormDataProps = {
    name,
    email,
    message
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'fauziand67@gmail.com',
      replyTo: formData.email,
      subject: 'Contact Form Submission in Personal Website From ' + formData.name,
      html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>`
    });
    return NextResponse.json({
      status: 200,
      message: 'Message sent succesfully!',
      data: formData
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'Message failed to send!'
    });
  }
}
