import accountService from '@/services/account-service'
import { cookies } from 'next/headers'

const MeProfilePage = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('token')
  const profile = await accountService.getProfile(accessToken?.value)

  return <div>MeProfilePage</div>
}

export default MeProfilePage
