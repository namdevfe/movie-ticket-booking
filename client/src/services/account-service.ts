import { RegisterBodyType, RegisterResType } from '@/types/auth'
import http from '@/utils/http'

const accountService = {
  getProfile(accessToken?: string) {
    return http.get('/user/view', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  },
  getProfileClient() {
    return http.get('/user/view')
  },
  getUsers(accessToken?: string, query: string = '') {
    return http.get(`/user/view-all${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  },
  addNewUser(payload: RegisterBodyType) {
    return http.post<RegisterResType>('/user/add', payload)
  }
}

export default accountService
