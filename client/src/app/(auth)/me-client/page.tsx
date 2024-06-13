'use client'

import accountService from '@/services/account-service'
import { clientAccessToken } from '@/utils/http'
import { useEffect } from 'react'

const MeClientPage = () => {
  const accessToken = clientAccessToken.value
  console.log('🚀accessToken---->', accessToken)

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await accountService.getProfileClient()
      console.log('🚀res---->', res)
    }

    fetchProfile()
  }, [accessToken])

  return <div>MeClientPage</div>
}

export default MeClientPage
