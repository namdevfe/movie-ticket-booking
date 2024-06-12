import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
})

if (!configProject.success) {
  console.log('🚀configProject.error.issues---->', configProject.error.issues)
  throw new Error('The values ​​declared in the .env file are invalid')
}

const envConfig = configProject.data

export default envConfig
