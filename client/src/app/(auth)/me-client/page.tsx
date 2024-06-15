'use client'

import accountService from '@/services/account-service'
import { clientAccessToken, clientToken } from '@/utils/http'
import { useEffect } from 'react'

const MeClientPage = () => {
  const accessToken = clientAccessToken.value
  const token = clientToken.value

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await accountService.getProfileClient()
    }

    fetchProfile()
  }, [accessToken])

  return <div>MeClientPage</div>
}

export default MeClientPage
