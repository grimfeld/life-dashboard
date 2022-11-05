// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQphmMAI6W4uHgg1CUGTlgoVRRSVzKQkQ",
  authDomain: "life-dashboard-grimfeld.firebaseapp.com",
  projectId: "life-dashboard-grimfeld",
  storageBucket: "life-dashboard-grimfeld.appspot.com",
  messagingSenderId: "317195371833",
  appId: "1:317195371833:web:1c856c6b7d0964afd9d4e8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)

export default app