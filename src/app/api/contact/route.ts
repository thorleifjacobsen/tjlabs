import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: wire up Resend once RESEND_API_KEY is set in .env
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@tjlabs.no',
  //   to: 'thorleif@tjlabs.no',
  //   subject: `Contact from ${name}`,
  //   text: `From: ${name} <${email}>\n\n${message}`,
  // });

  console.log('Contact form submission:', { name, email, message });

  return NextResponse.json({ ok: true });
}
