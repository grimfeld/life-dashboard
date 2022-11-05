import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseApp'

export const logIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw error
  }
}