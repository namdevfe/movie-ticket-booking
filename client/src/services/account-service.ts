import http from '@/utils/http'

const accountService = {
  getProfile(accessToken: string) {
    return http.get('/user/view', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  }
}

export default accountService
