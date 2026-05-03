"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "sent" | "error";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !senderEmail.includes("@") || message.length < 10) {
      setFormState("error");
      return;
    }

    setFormState("submitting");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setFormState("sent"), 450);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" name="name" className="form-input" placeholder="Your name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="you@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-input resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {formState === "error" ? (
        <p className="text-sm font-medium text-red-600 dark:text-red-300">
          Please enter your name, a valid email, and a message of at least 10 characters.
        </p>
      ) : null}
      {formState === "sent" ? (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
          Your email app should be ready with the message.
        </p>
      ) : null}

      <button type="submit" className="button-primary" disabled={formState === "submitting"}>
        {formState === "submitting" ? "Preparing..." : "Send Message"}
      </button>
    </form>
  );
}
