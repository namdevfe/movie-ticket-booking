'use client'

import accountService from '@/services/account-service'
import { clientToken } from '@/utils/http'
import { useEffect } from 'react'

const MeClientPage = () => {
  const token = clientToken.value

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await accountService.getProfileClient()
    }

    fetchProfile()
  }, [token])

  return <div>MeClientPage</div>
}

export default MeClientPage
