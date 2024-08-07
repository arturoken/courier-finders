import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'black'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'default', 
  ...props 
}) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    primary: 'bg-black-600 text-white hover:bg-black-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    black: 'bg-black text-white hover:bg-gray-300 hover:text-black',
  }

  const variantStyle = variants[variant]

  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }