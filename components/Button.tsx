import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isFormValid?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, isFormValid, ...props }) => {
  return (
    <button
      {...props}
      className={[
        'text-white  rounded-md px-8 py-2',
        props.type === "submit" ? isFormValid ? 'bg-green-500 hover:bg-green-500/75' : 'bg-red-500 hover:bg-red-500/75' : 'bg-accent  hover:bg-accent/75',
        props.disabled ? 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed' : 'transform transition-all duration-200 hover:-translate-y-1',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button