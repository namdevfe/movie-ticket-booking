'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import envConfig from '@/config/environment'
import { message, regex, regexMessage } from '@/constants/validate'
import { RegisterBodyType } from '@/types/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterBodyType>()

  // Handle Register
  const onSubmit = async (data: RegisterBodyType) => {
    const payload = { ...data }

    try {
      const res = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const registerRes: { message: string; statusCode: number } =
        await res.json()

      if (!res.ok)
        throw new Error(
          registerRes.message || 'Registration failed. Please try again.'
        )

      // Notification
      toast.success(
        registerRes.message || 'Register is successfully. Please login.'
      )
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
