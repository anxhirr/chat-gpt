'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='bg-lightgreen h-screen flex flex-col items-center justify-center text-center'>
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
