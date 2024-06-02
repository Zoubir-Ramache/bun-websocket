"use client"
import React, { ReactNode, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
function SubmitButton({children}:{children:ReactNode}) {
    const {pending}=useFormStatus()

  return (
    <Button disabled={pending}>{children}</Button>
  )
}

export default SubmitButton