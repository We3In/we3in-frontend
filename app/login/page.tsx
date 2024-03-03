import { SignIn } from '@/components/SignIn'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

export default function Login() {
  return (
    <div className="w-full h-screen bg-background antialiased flex justify-center items-center dark:bg-grid-white/[0.03] bg-grid-black/[0.03]">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
      <SignIn />
    </div>
  )
}
