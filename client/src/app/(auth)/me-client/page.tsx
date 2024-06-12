'use client'

import { useAppContext } from '@/context/app-provider'
import { useEffect, useState } from 'react'

const MeClientPage = () => {
  const { token } = useAppContext()
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/view`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )

        const data = await res.json()

        if (!res.ok) throw new Error(data?.message)
        console.log('🚀data---->', data)

        setProfile(data)
      } catch (error) {
        console.log('🚀error---->', error)
      }
    }

    fetchProfile()
  }, [token])

  return <div>MeClientPage</div>
}

export default MeClientPage
