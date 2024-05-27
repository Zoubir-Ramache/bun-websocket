import { cn } from '@/lib/utils'
import React from 'react'
type PROPS={
    recieved:boolean , 
    content:string
}
function Message({recieved,content }:PROPS) {
  return (
    <div  className=' '>
        <p className={cn( recieved ?"bg-primary" :"bg-gray-300")} >

            {content}
        
        </p>
        </div>
  )
}

export default Message