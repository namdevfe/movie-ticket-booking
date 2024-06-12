import { cookies } from 'next/headers'

const MeProfilePage = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('token')

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/view`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken?.value}`
    }
  })

  const meProfile = await res.json()

  return <div>MeProfilePage</div>
}

export default MeProfilePage
