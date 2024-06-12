'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import envConfig from '@/config/environment'
import { message, regex, regexMessage } from '@/constants/validate'
import { useAppContext } from '@/context/app-provider'
import { LoginBodyType, LoginResType } from '@/types/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const LoginForm = () => {
  // Init hooks
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginBodyType>()

  const { setToken } = useAppContext()

  // Handle Login
  const onSubmit = async (data: LoginBodyType) => {
    try {
      const payload = { ...data }

      // Call API login
      const res = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const loginRes: LoginResType = await res.json()

      // Login fail
      if (!res.ok)
        throw new Error(loginRes.message || 'Login failed. Please try again.')

      // Save token to Context API
      const accessToken = loginRes?.data?.accessToken || ''

      setToken(accessToken)

      const resFromNextServer = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRes)
      })

      const dataFromNextServer = await resFromNextServer.json()
      console.log('🚀dataFromNextServer---->', dataFromNextServer)

      // Notification
      toast.success(loginRes.message || 'Login is successfully.')
    } catch (error: any) {
      console.log('🚀error.message---->', error.message)
      toast.error(error.message || 'Login failed. Please try again.')
    }
  }

  return (
    <form className='min-w-[263px] mt-16' onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Email'
        id='email'
        placeholder='Enter your email...'
        {...register('email', {
          required: message.EMAIL,
          pattern: {
            value: regex.EMAIL,
            message: regexMessage.EMAIL
          }
        })}
        error={errors.email?.message}
      />

      <Input
        label='Password'
        type='password'
        id='password'
        placeholder='Enter your password...'
        containerStyle='mt-4'
        {...register('password', {
          required: message.PASSWORD,
          minLength: {
            value: 6,
            message: message.MIN_LENGTH_PASSWORD
          }
        })}
        error={errors.password?.message}
      />
      <Button className='mt-6 w-full' type='submit'>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
