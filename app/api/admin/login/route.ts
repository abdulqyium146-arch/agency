export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSessionToken, SESSION_COOKIE } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const adminEmail = (process.env.ADMIN_EMAIL ?? "admin@sbmp.com").trim();
  const adminHash = process.env.ADMIN_PASSWORD_HASH?.trim();

  if (!email || !password || email !== adminEmail || !adminHash) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, adminHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await createSessionToken({ id: "admin", email: adminEmail, role: "ADMIN" });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return res;
}
