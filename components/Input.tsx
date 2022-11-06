import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react'
import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  EyeIcon,
  EyeSlashIcon,
  HashtagIcon,
  InboxIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** Is the input valid ? */
  isInvalid?: boolean
  error?: string
  label?: string
  currency?: '$' | '€' | '£'
  prefix?: string
  suffix?: string
}

const Input: FC<InputProps> = ({
  isInvalid,
  error,
  type,
  label,
  prefix,
  suffix,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [currentType, setCurrentType] = useState(type)

  return (
    <div className="relative">
      {label && (
        <label
          className="absolute z-10 px-2 text-gray-400 bg-white -top-3 left-4"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <div
        className={[
          'flex gap-2 border-2 rounded-lg px-4 py-2 hover:shadow-md relative z-0',
          isFocused ? 'border-gray-800 shadow-md' : 'border-gray-300 shadow',
          isInvalid ? '!border-red-500 text-red-500' : 'text-gray-800'
        ].join(' ')}
      >
        {type === 'email' && <InboxIcon className="w-8 p-1 rounded-lg" />}
        {type === 'search' && (
          <MagnifyingGlassIcon className="w-8 p-1 rounded-lg" />
        )}
        {type === 'number' && !props.currency && (
          <HashtagIcon className="w-8 p-1 rounded-lg" />
        )}
        {type === 'number' && props.currency === '$' && (
          <CurrencyDollarIcon className="w-8 p-1 rounded-lg" />
        )}
        {type === 'number' && props.currency === '€' && (
          <CurrencyEuroIcon className="w-8 p-1 rounded-lg" />
        )}
        {type === 'number' && props.currency === '£' && (
          <CurrencyPoundIcon className="w-8 p-1 rounded-lg" />
        )}
        <input
          className="flex-grow outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={currentType}
          {...props}
        />
        {type === 'password' && currentType === 'password' && (
          <EyeIcon
            className="w-8 p-1 transition-all duration-500 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-1"
            onClick={() => setCurrentType('text')}
          />
        )}
        {type === 'password' && currentType === 'text' && (
          <EyeSlashIcon
            className="w-8 p-1 transition-all duration-500 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-1"
            onClick={() => setCurrentType('password')}
          />
        )}
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  )
}

export default Input
