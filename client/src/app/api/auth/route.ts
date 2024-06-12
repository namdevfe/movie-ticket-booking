export const POST = async (req: Request) => {
  // Get access token from request of next client
  const res = await req.json()
  const accessToken = res?.accessToken as string

  // // Check token
  if (!accessToken)
    return Response.json({ message: 'Token is required.' }, { status: 400 })

  return Response.json(res, {
    status: 200,
    headers: {
      'Set-Cookie': `token=${accessToken}; Path=/; HttpOnly`
    }
  })
}
