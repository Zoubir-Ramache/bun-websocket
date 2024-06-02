"use server"
import { RedirectType, redirect } from "next/navigation"
import axios from "axios"
const loginUser=async(formData:FormData)=>{
    
    const username=formData.get('username')
    const res =await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/login` , {username})
    
    if(res.status==201){
        redirect('/chat')
    }
    
}

export default  loginUser