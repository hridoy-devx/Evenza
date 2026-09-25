import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className={`${className} px-6 py-3.5 bg-primary rounded-full font-bold text-white`}>
        {children}
    </button>
  )
}

export default Button