'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'
import {  LuTrash2 } from 'react-icons/lu'
import { PenSquare } from "lucide-react";
import { SignInButton } from '@clerk/nextjs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string
    text?:string
    size?:btnSize
}


export  function SubmitButton({className,text,size}:SubmitButtonProps) {
    const {pending} = useFormStatus()
  return (
    <Button type='submit' disabled={pending} className={cn('capitalize' , className)} size={size}>
        {pending?<><ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>Please wait ...</>:text}
    </Button>
  )
}

type actionType = 'edit' | 'delete'

export const IconButton = ({actionType}:{actionType:actionType}) => {
  const {pending} = useFormStatus()
  const renderIcon = () => {
    switch(actionType){
      case 'edit':
        return <PenSquare />
      case 'delete':
        return <LuTrash2 />
      default:
        const never: never = actionType
        throw new Error(`Invalid action type:${never}`)
    }
  }
  return (
    <Button type='submit' size='icon' variant='link' className='p-2 cursor-pointer'>{pending?<ReloadIcon className='animate-spin'/>:renderIcon()}</Button>
  )
}

export const CardSignButton = () => {
  return <SignInButton mode='modal'>
    <Button type='button' size='icon' variant='outline' className='p-2 cursor-pointer' asChild>
      <FaRegHeart />
    </Button>
  </SignInButton>
}

export const CardSubmitButton = ({isFavorite}:{isFavorite:boolean}) => {
  const {pending} = useFormStatus()
  return <Button type='submit' size='icon' variant='outline' className='p-2 cursor-pointer'>
    {pending?<ReloadIcon className='animate-spin'/>:isFavorite?<FaHeart />:<FaRegHeart />}
  </Button>
}
