'use client'

const initialState = {
    message: ''
}

import { actionFunction } from '@/utils/types'
import React, { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast';


function FormContainer({action, children}: {action:actionFunction,children:React.ReactNode}) {
    const [state , formAction] =React.useActionState(action , initialState)
    const {toast} = useToast()
    useEffect(()=> {
        if(state.message) {
            toast({description:state.message})
        }
    },[state])
  return (
    <form action={formAction}>
      {children}
    </form>
  )
}

export default FormContainer
