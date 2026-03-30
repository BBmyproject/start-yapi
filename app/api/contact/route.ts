import { siteContact } from "@/data/site-contact";
import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

/**
 * TODO: Nodemailer ile `siteContact.email` adresine HTML şablonlu mail gönder.
 * Şu an gövde konsola yazılır; üretimde gerçek SMTP / provider bağlanana kadar 200 dönüyoruz.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Geçersiz istek." },
      { status: 400 },
    );
  }

  const { fullName, phone, email, subject, message } = payload;

  if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, message: "Zorunlu alanları doldurun." },
      { status: 400 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[contact] hedef:", siteContact.email, {
      fullName,
      phone,
      email,
      subject,
      message,
    });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  });
}
