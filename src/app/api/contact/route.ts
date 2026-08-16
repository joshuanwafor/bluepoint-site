import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  organisation?: string;
  phone?: string;
  enquiry?: string;
  message?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let data: Payload;

  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Silently accept bot submissions so they get no signal.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email and a message." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const enquiry = {
    name,
    email,
    organisation: data.organisation?.trim() || "—",
    phone: data.phone?.trim() || "—",
    enquiry: data.enquiry?.trim() || "General",
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Without a mail provider configured the enquiry is logged server-side so
  // nothing is lost in development. Set RESEND_API_KEY + CONTACT_FROM_EMAIL to
  // deliver it by email in production. See README.
  if (!apiKey || !from) {
    console.info("[contact] enquiry received (no mail provider configured)", enquiry);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${enquiry.enquiry} — ${name}`,
        text: [
          `Name:         ${enquiry.name}`,
          `Email:        ${enquiry.email}`,
          `Organisation: ${enquiry.organisation}`,
          `Phone:        ${enquiry.phone}`,
          `Enquiry:      ${enquiry.enquiry}`,
          "",
          enquiry.message,
          "",
          `Received: ${enquiry.receivedAt}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("[contact] mail provider error", res.status, await res.text());
      return NextResponse.json(
        { error: "We could not send your message. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] mail provider request failed", err);
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 },
    );
  }
}
