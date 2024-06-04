import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/shared/submit-button'
import loginUser from '@/actions/loginUser'
import {cookies } from "next/headers"
import { redirect } from 'next/navigation'

function AuthPage() {
const userID =cookies().get("userID")
if(userID){
  redirect('chat')
}

    
  return (
    <div className=' h-screen flex items-center justify-center gap-8   flex-col '>
        <h1 className=' text-xl font-bold '>login</h1>
        <form action={loginUser}  className=' flex flex-col gap-4'>

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