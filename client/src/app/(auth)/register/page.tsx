import RegisterForm from '@/app/(auth)/register/register-form'
import Image from 'next/image'

const RegisterPage = () => {
  return (
    <main className="bg-[url('/img/bg-auth.png')] bg-no-repeat bg-cover w-full h-screen">
      <div className='flex items-center justify-center h-full'>
        <div className='px-20 pt-[98px] pb-14 bg-white'>
          <div className='flex items-center justify-center'>
            <Image
              src='/img/movie-roll.svg'
              alt='Movie Roll'
              width={100}
              height={100}
            />
          </div>
          <h1 className='text-4xl'>Create Account</h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
