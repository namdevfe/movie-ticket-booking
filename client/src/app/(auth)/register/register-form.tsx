import Button from '@/components/button'
import Input from '@/components/input'

const RegisterForm = () => {
  return (
    <form className='min-w-[263px] mt-16' method='POST'>
      <Input
        label='Email'
        type='text'
        id='email'
        name='email'
        placeholder='Enter your email...'
      />

      <Input
        label='Password'
        type='password'
        id='password'
        name='password'
        placeholder='Enter your password...'
        containerStyle='mt-4'
      />
      <Button className='mt-14 w-full' type='button'>
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
