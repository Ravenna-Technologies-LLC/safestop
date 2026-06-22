"use client";

import { FormEvent, useState } from "react";

type FieldName = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!emailPattern.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!subject) nextErrors.subject = "Please enter a subject.";
    if (!message) nextErrors.message = "Please enter your message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (company) {
      setStatus("Sorry, something went wrong. Please email us directly at yehuda@safestop.global.");
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `mailto:yehuda@safestop.global?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with a prepared message. Please review it and press send there.");
    window.location.assign(mailto);
  }

  const fieldClass = (field: FieldName) =>
    `min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink shadow-sm outline-none transition placeholder:text-[#8aa0ab] focus:ring-4 ${
      errors[field]
        ? "border-[#b84b57] focus:border-[#b84b57] focus:ring-[#b84b57]/10"
        : "border-[#cfdedb] focus:border-teal focus:ring-[#2d9b91]/15"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-[#dce9e6] bg-white p-5 shadow-soft sm:p-8">
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass("name")}
          />
          {errors.name && <p id="name-error" className="mt-2 text-sm font-medium text-[#a63f4b]">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass("email")}
          />
          {errors.email && <p id="email-error" className="mt-2 text-sm font-medium text-[#a63f4b]">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-bold text-ink">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass("subject")}
        />
        {errors.subject && <p id="subject-error" className="mt-2 text-sm font-medium text-[#a63f4b]">{errors.subject}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass("message")}
        />
        {errors.message && <p id="message-error" className="mt-2 text-sm font-medium text-[#a63f4b]">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-ink px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-[#09243c]/15 transition hover:bg-[#123955] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#2d9b91]/35"
      >
        Open email draft
      </button>
      <p className="mt-4 text-sm leading-6 text-[#526b79]">Submitting opens your email app with the message prepared. Please press send from your email app to deliver it.</p>
      {status && <p role="status" aria-live="polite" className="mt-4 rounded-xl bg-[#e8f5f1] p-4 text-sm font-semibold leading-6 text-[#245f5a]">{status}</p>}
    </form>
  );
}
