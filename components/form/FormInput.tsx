import { Input } from "../ui/input"
import { Label } from "../ui/label"

type InputProps = {
    name:string
    type:string
    label?:string
    defaultValue? : string
    placeholder? : string
}


function FormInput({name,label,type,defaultValue,placeholder}:InputProps) {
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize">{label || name}</Label>
      <Input name={name} type={type} id={name} defaultValue={defaultValue} placeholder={placeholder}required/>
    </div>
  )
}

export default FormInput
