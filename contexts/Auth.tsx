import { onAuthStateChanged, User } from "firebase/auth"
import { FC, createContext, PropsWithChildren, useContext, ReactNode, useEffect, useState } from "react"
import { auth } from '../firebaseApp'

export type AuthContextType = {
  user: User | null
}
export const AuthContext = createContext<AuthContextType>({ user: null })

export const AuthProvider: FC<PropsWithChildren<{ fallback: ReactNode }>> = ({ children, fallback }) => {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  if (!user) return <>{fallback}</>

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}
