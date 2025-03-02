import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='justify-center items-center flex flex-col h-screen'>
        <SignIn redirectUrl="/dashboard"/>
        </div>

  )
}

