import { FC, PropsWithChildren } from 'react'

const FormLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='grid h-screen place-items-center'>
      {children}
    </div>
  )
}

export default FormLayout