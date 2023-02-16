'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='bg-lightgreen h-screen flex flex-col items-center justify-center text-center'>
      <Image
        src='https://pbs.twimg.com/profile_images/1598924796372422656/nEcoIDXz_400x400.jpg'
        width={200}
        height={200}
        alt='ChatGPT Logo'
        priority
        className='animate-bounce'
      />

      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className='text-white font-bold text-3xl animate-pulse'
      >
        Sign In to use ChatGPT
      </button>
    </div>
  )
}
export default Login
