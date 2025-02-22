import { jwtVerify, SignJWT } from "jose"
import type { NextRequest } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function createToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(JWT_SECRET))

  return token
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return verified.payload
  } catch (err) {
    return null
  }
}

export async function getUser(req: NextRequest) {
  const token = req.cookies.get("token")?.value
  if (!token) return null

  const payload = await verifyToken(token)
  return payload
}

