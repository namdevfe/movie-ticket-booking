'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

export const AppContext = createContext({
  token: '',
  setToken: (token: string) => {}
})

type AppProviderProps = {
  children: ReactNode
  initialToken?: string
}

const AppProvider = ({ children, initialToken }: AppProviderProps) => {
  const [token, setToken] = useState(initialToken || '')
  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!AppContext)
    throw new Error('useAppContext must be used within an AppProvider')
  return context
}

export default AppProvider
