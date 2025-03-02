import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '/components/ui/button'

function Hero() {
  return (
    <div className="flex items-center justify-between max-w-[90%] mx-auto mt-50 px-10">
      {/* Left Side */}
      <div className="w-1/2">
        <h2 className="font-bold text-[50px]">Schedule Meetings</h2>
        <h3 className="text-xl mt-5 text-slate-500">
          Effortlessly plan, coordinate, and manage your meetings with a simple and
          efficient tool that simplifies the process of arranging, confirming, and tracking all your meetings.
        </h3>
        <div className="mt-7">
          <div className="flex items-center gap-2">
            <Link href="/sign-in"><Button className="p-7 flex items-center">
              <Image src="/google.png" alt="Google Logo" width={20} height={20} />
              Sign up with Google
            </Button></Link>
          </div>
          <hr className="my-4" />
          <h2>
            <Link href="/sign-in" className="text-red-900">Sign in with Email</Link>
          </h2>
        </div>
      </div>


      <div className="w-1/2 flex justify-center">
        <video 
          src="/home.mp4" 
          autoPlay 
          loop 
          muted 
          className="w-full max-w-lg"
        />
      </div>
    </div>
  )
}

export default Hero
