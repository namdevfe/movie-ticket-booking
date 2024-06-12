'use client'

import { clientAccessToken } from '@/utils/http'
import { ReactNode, useContext, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
  initialToken?: string
}

const AppProvider = ({ children, initialToken }: AppProviderProps) => {
  useState(() => {
    if (typeof window !== 'undefined') {
      clientAccessToken.value = initialToken ?? ''
    }
  })
  return <>{children}</>
}

export default AppProvider
