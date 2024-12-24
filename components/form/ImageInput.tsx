
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput() {
    const name = 'Image'
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Input id={name} name={name} type='file' required accept='image/*'/>
    </div>
  )
}

export default ImageInput 
