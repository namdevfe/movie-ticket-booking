import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType
} from '@/types/auth'
import http from '@/utils/http'

const authService = {
  login(payload: LoginBodyType) {
    return http.post<LoginResType>('/auth/login', payload)
  },
  register(payload: RegisterBodyType) {
    return http.post<RegisterResType>('/auth/register', payload)
  },
  authFromNextServer(accessToken: string) {
    return http.post(
      '/api/auth',
      { accessToken },
      {
        baseUrl: ''
      }
    )
  },
  logoutFromNextClientToNextServer() {
    return http.get('/api/auth/logout', {
      baseUrl: ''
    })
  }
}

export default authService
