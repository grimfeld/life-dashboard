import { FC, PropsWithChildren } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Layout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-grow flex flex-col'>
        <NavBar />
        <div className='p-4  flex-grow'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout