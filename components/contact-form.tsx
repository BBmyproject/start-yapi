"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback(null);

    const form = e.currentTarget;
    const payload = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (res.ok && data.ok) {
        setStatus("success");
        setFeedback(data.message ?? "Teşekkürler.");
        form.reset();
        return;
      }

      setStatus("error");
      setFeedback(data.message ?? "Gönderilemedi. Lütfen tekrar deneyin.");
    } catch {
      setStatus("error");
      setFeedback("Bağlantı hatası. Lütfen daha sonra tekrar deneyin.");
    }
  }

  const fieldClass =
    "w-full rounded-xl border-none border-black/15 px-4 py-3 text-base text-black outline-none bg-[#f5f5f5]";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-4"
      aria-label="İletişim formu"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-fullName" className="sr-only">
            İsim ve soyisim
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="İsim ve soyisim"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Telefon
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Telefon"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          E-posta
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="E-posta"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="sr-only">
          Konu
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Konu"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Mesajınız
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder="Mesajınız"
          className={`${fieldClass} min-h-[140px] resize-y`}
        />
      </div>

      <div className="">
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center rounded-xl border border-black cursor-pointer bg-black px-8 py-4 text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Gönderiliyor…" : "Gönder"}
        </button>
        {feedback ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-800" : "text-red-700"
            }`}
            role="status"
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
