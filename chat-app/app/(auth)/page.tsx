import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/shared/submit-button'
import loginUser from '@/actions/loginUser'
import React from 'react'

function AuthPage() {
    

    
  return (
    <div className=' h-screen flex items-center justify-center gap-8   flex-col '>
        <h1 className=' text-xl '>login</h1>
        <form action={loginUser} >

        <Input
        className=' w-52'
        placeholder='username'
        name='username'
        required
        type='text'
        />
        <SubmitButton >submit</SubmitButton>
        </form>
    </div>
  )
}

export default AuthPage