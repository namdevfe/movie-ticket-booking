'use client'

import accountService from '@/services/account-service'
import { clientAccessToken } from '@/utils/http'
import { ReactNode, createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context)
    throw new Error('useAuthContext must be used within an AuthProvider')
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [profile, setProfile] = useState()

  // Handle Login

  // Handle Register

  // Handle Get Profile
  const handleGetProfile = async (): Promise<void> => {
    try {
      const profile = await accountService.getProfile()
      console.log('🚀profile---->', profile)
    } catch (error) {
      console.log('🚀error---->', error)
    }
  }

  return (
    <AuthContext.Provider value={{ handleGetProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
