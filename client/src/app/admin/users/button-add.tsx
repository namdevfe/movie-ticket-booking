'use client'

import Button from '@/components/button'
import { useRouter } from 'next/navigation'

const ButtonAddUser = () => {
  const router = useRouter()
  return (
    <Button onClick={() => router.push('/admin/users/add')}>
      Add new user
    </Button>
  )
}

export default ButtonAddUser
