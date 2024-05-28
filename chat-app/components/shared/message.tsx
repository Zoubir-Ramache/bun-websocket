import { cn } from '@/lib/utils'
import React from 'react'
type PROPS={
    recieved:boolean , 
    content:string
}
function Message({recieved,content }:PROPS) {
  return (
    <div  className={cn('  m-2  rounded-lg p-2 text-foreground w-1/2' , recieved ? 'bg-primary' :'bg-accent')}>
        <p  >

            {content}
        
        </p>
        </div>
  )
}

export default Message