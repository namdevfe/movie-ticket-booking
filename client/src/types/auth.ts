export type RegisterBodyType = {
  email: string
  username: string
  password: string
}

export type LoginBodyType = {
  email: string
  password: string
}

export type LoginResType = {
  statusCode?: number
  message: string
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type RegisterResType = {
  statusCode: number
  message: string
}
