import RegisterForm from '@/app/(auth)/register/register-form'

const RegisterPage = () => {
  return (
    <main>
      <div className='flex items-center justify-center'>
        <div className='px-20'>
          <h1>Create Account</h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
