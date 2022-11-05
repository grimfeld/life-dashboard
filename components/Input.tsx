import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react'
import { InboxIcon } from '@heroicons/react/24/solid'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** Is the input valid ? */
  isInvalid?: boolean
  error?: string
}

const Input: FC<InputProps> = ({ isInvalid, error, ...props }) => {

  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <div className={[
        "flex gap-2 border-2 rounded-md px-4 py-2 ",
        isFocused ? "border-gray-500" : "border-gray-200",
        isInvalid ? "!border-red-500" : ""
      ].join(" ")}>
        {props.type === "email" && <InboxIcon className='w-4' />}
        <input
          className='outline-none flex-grow'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {error && <span className='text-red-500'>{error}</span>}
      </div>
    </>
  )
}

export default Input
