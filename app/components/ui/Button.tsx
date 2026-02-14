import { ChildrenType } from '@/types/ChildrenTypes'
import React from 'react'




const Button = ({children, className}: ChildrenType) => {
  return (
    <button className={`${className} rounded-full cursor-pointer bg-[white] text-sm  text-[black] font-medium`}>
    {children}
    </button>
  )
}

export default Button
