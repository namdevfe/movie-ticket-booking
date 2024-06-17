import { groupRoles } from '@/constants/roles'
import { PayloadJWTTypes } from '@/types/auth'
import { decode } from '@/utils/jwt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const AdminLayout = (props: Props) => {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')?.value
  // const { accessToken } = JSON.parse(token || '')
  // const payloadJWT = decode<PayloadJWTTypes>(accessToken)
  // const role = payloadJWT.group?.name
  // const isAdmin = role === groupRoles.ADMIN

  // if (!isAdmin) {
  //   redirect('/')
  // }
  return <div>AdminLayout</div>
}

export default AdminLayout
