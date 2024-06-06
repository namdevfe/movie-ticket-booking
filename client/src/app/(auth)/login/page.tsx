import LoginForm from '@/app/(auth)/login/login-form'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
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
          <h1 className='text-4xl'>Login</h1>
          <LoginForm />
          <Link
            href='/register'
            className='block text-sm text-sky-blue mt-6 text-center mx-auto transition-colors duration-300'
          >
            Don not have an account ?
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
