import { PayloadJWTTypes } from '@/types/auth'
import { decode } from '@/utils/jwt'

export const POST = async (req: Request) => {
  // Get access token from request of next client
  const res = await req.json()
  const accessToken = res?.accessToken as string

  // Check token
  if (!accessToken)
    return Response.json({ message: 'Token is required.' }, { status: 400 })

  // Decode
  const payloadJWT = decode<PayloadJWTTypes>(accessToken)
  const expiresDate = new Date(payloadJWT.exp * 1000).toUTCString()

  return Response.json(res, {
    status: 200,
    headers: {
      'Set-Cookie': `token=${accessToken}; Path=/; HttpOnly; Expires=${expiresDate}; SameSite=Lax; Secure`
    }
  })
}
