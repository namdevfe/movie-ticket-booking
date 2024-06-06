import RegisterForm from '@/app/(auth)/register/register-form'
import Image from 'next/image'
import Link from 'next/link'

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
          <Link
            href='/login'
            className='block text-sm text-sky-blue mt-6 text-center mx-auto transition-colors duration-300'
          >
            Do you already have an account ?
          </Link>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
