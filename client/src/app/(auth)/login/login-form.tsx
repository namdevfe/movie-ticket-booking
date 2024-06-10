'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { message, regex, regexMessage } from '@/constants/validate'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type LoginBodyType = {
  email: string
  password: string
}

type LoginResType = {
  statusCode?: number
  message: string
  data: {
    accessToken: string
    refreshToken: string
  }
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginBodyType>()

  // Handle Login
  const onSubmit = async (data: LoginBodyType) => {
    try {
      const payload = { ...data }
      console.log('🚀payload---->', payload)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )
      const loginRes: LoginResType = await res.json()

      if (!res.ok) throw new Error('Login failed. Please try again.')
      toast.success(loginRes.message || 'Login is successfully.')
    } catch (error: any) {
      console.log('🚀error---->', error)
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
