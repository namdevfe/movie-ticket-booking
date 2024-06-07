'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { message, regex, regexMessage } from '@/constants/validate'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type RegisterBodyTypes = {
  email: string
  username: string
  password: string
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterBodyTypes>()

  const onSubmit = async (data: RegisterBodyTypes) => {
    const payload = { ...data }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )
      if (!res.ok) throw new Error('Registration failed. Please try again.')
      const data: { message: string; statusCode: number } = await res.json()
      toast.success(data.message || 'Register is successfully. Please login.')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
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
        containerStyle='mt-4'
        label='Username'
        id='username'
        placeholder='Enter your username...'
        {...register('username', {
          required: message.USERNAME,
          minLength: {
            value: 6,
            message: message.MIN_LENGTH_USERNAME
          }
        })}
        error={errors.username?.message}
      />

      <Input
        containerStyle='mt-4'
        label='Password'
        type='password'
        id='password'
        {...register('password', {
          required: message.PASSWORD,
          minLength: {
            value: 6,
            message: message.MIN_LENGTH_PASSWORD
          }
        })}
        placeholder='Enter your password...'
        error={errors.password?.message}
      />
      <Button className='mt-6 w-full' type='submit'>
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
