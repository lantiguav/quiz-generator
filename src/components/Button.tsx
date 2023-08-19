import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, disabled, className, type }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-700 text-white text-sm p-2 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {children}
    </button>
  )
}

export default Button
