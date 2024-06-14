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
  authFromNextServer(payload: { accessToken: string; refreshToken: string }) {
    return http.post('/api/auth', payload, {
      baseUrl: ''
    })
  },
  logoutFromNextClientToNextServer() {
    return http.get('/api/auth/logout', {
      baseUrl: ''
    })
  }
}

export default authService
