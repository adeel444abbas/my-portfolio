import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.TO_EMAIL,
    subject: "Resend Test",
    html: "<h1>Hello World</h1>",
  });

  console.log(result);
}

test();
