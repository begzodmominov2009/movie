import React from 'react'


type ButtonType = {
    children: React.ReactNode,
    className: string
}

const Button = ({children, className}: ButtonType) => {
  return (
    <button className={`${className} rounded-full cursor-pointer bg-[white] text-sm  text-[black] font-medium`}>
    {children}
    </button>
  )
}

export default Button
