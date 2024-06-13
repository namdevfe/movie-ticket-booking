import envConfig from '@/config/environment'

class HttpError extends Error {
  status: number
  data: any
  constructor({ status, data }: { status: number; data: any }) {
    super('Http Error')
    this.status = status
    this.data = data
  }
}

class AccessToken {
  private accessToken = ''

  get value() {
    return this.accessToken
  }

  set value(accessToken: string) {
    if (typeof window === 'undefined') {
      throw new Error('Cannot set access token on server side.')
    }
    this.accessToken = accessToken
  }
}

export const clientAccessToken = new AccessToken()

type CustomOptionsType = RequestInit & {
  baseUrl?: string
}

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptionsType | undefined
) => {
  // If baseUrl is string empty same call to Next Server
  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json',
    Authorization: clientAccessToken.value
      ? `Bearer ${clientAccessToken.value}`
      : ''
  }

  // Fetching data
  const fullURL = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  const res = await fetch(fullURL, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    method,
    body
  })

  const data: Response = await res.json()
  const status = res.status

  // Failed
  if (!res.ok) {
    throw new HttpError({ status, data })
  }

  // Success
  return data
}

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptionsType, 'body'> | undefined
  ) {
    return request<Response>('GET', url, options)
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptionsType, 'body'> | undefined
  ) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptionsType, 'body'> | undefined
  ) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptionsType, 'body'> | undefined
  ) {
    return request<Response>('DELETE', url, { ...options, body })
  }
}

export default http
