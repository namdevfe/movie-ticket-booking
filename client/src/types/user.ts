import { BaseTypes } from '@/types/common'

export type ProfileTypes = BaseTypes & {
  id: number
  address: string
  avatar: string
  bookings: [] | null
  email: string
  groupId: number
  group: GroupTypes
  phone: string | null
  username: string
}

export type GroupTypes = {
  id: number
  description: string
  name: string
}
