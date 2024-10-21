import React from 'react'
import { useLang } from '../LangProvider'


function Input({type, id, registerVal, required, isError, emailError}) {

  const {register, handleSubmit, data, setData, errors} = useLang()



  return (
    
    <input {...register(registerVal, required)} className={`w-full rounded-md py-[10px] px-4 border ${errors.hasOwnProperty(id) || emailError != '' ? 'border-red-600' : 'border-[#E6E7E8]'} outline-none focus:border-darkBlue  `} type={type} id={id} />
  )
}

export default Input