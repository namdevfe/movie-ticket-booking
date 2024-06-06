import Button from '@/components/button'

const RegisterForm = () => {
  return (
    <form className='min-w-[263px]' method='POST'>
      {/* Email field */}
      <div className='flex flex-col gap-[18px]'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          placeholder='Enter your email'
          name='email'
          id='email'
        />
      </div>

      {/* Password field */}
      <div className='flex flex-col gap-[18px]'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Enter your password...'
          name='password'
          id='password'
        />
      </div>
      <Button
        className='mt-[66px]'
        type='button'
        variant='secondary'
        size='small'
      >
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
