"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./ui";

const enquiryTypes = [
  "Site feasibility assessment",
  "New charging station build",
  "Fleet charging solution",
  "Operations & maintenance",
  "Technology platform",
  "Partnership or investment",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-charge-500/30 bg-charge-300/10 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-charge-500 text-white">
          <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="m5.5 10.5 3 3 6-7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
          Message received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-900/65">
          Thank you for reaching out. A member of the Blue Point team will review
          your enquiry and respond shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[14px] font-semibold text-volt-700 underline underline-offset-4 hover:text-volt-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-ink-900/8 bg-white p-7 md:p-10"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="Organisation" name="organisation" autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="mt-5">
        <label
          htmlFor="enquiry"
          className="block text-[13px] font-semibold text-ink-900"
        >
          What can we help with?
        </label>
        <select
          id="enquiry"
          name="enquiry"
          defaultValue={enquiryTypes[0]}
          className="mt-2 w-full appearance-none rounded-xl border border-ink-900/12 bg-white px-4 py-3 text-[15px] text-ink-900 transition-colors focus:border-volt-500 focus:outline-none"
        >
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-[13px] font-semibold text-ink-900"
        >
          Tell us about your site or project{" "}
          <span className="text-ink-900/40">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Location, available power supply, expected vehicles or fleet size, timeline…"
          className="mt-2 w-full resize-y rounded-xl border border-ink-900/12 bg-white px-4 py-3 text-[15px] text-ink-900 transition-colors placeholder:text-ink-900/35 focus:border-volt-500 focus:outline-none"
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p role="alert" className="mt-5 text-[14px] font-medium text-red-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-volt-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        {status === "sending" ? null : <Arrow />}
      </button>

      <p className="mt-5 text-[13px] leading-relaxed text-ink-900/45">
        We typically respond within one business day. Your details are used only
        to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-semibold text-ink-900">
        {label}{" "}
        {required ? (
          <span className="text-ink-900/40">(required)</span>
        ) : (
          <span className="text-ink-900/30">(optional)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-ink-900/12 bg-white px-4 py-3 text-[15px] text-ink-900 transition-colors placeholder:text-ink-900/35 focus:border-volt-500 focus:outline-none"
      />
    </div>
  );
}
