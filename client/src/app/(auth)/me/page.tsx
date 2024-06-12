import accountService from '@/services/account-service'
import { cookies } from 'next/headers'

const MeProfilePage = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('token')?.value

  const profile = await accountService.getProfile(accessToken ?? '')

  console.log('🚀profile---->', profile)

  return <div>MeProfilePage</div>
}

export default MeProfilePage
