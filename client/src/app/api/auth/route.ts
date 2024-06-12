export const POST = async (req: Request) => {
  // Get access token from request of next client
  const res = await req.json()
  const token = res?.data?.accessToken

  // Check token
  if (!token)
    return Response.json({ message: 'Token is required.' }, { status: 400 })

  return Response.json(res, {
    status: 200,
    headers: {
      'Set-Cookie': `token=${token}; Path=/; HttpOnly`
    }
  })
}
