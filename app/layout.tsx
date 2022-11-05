
"use client"

import { AuthProvider } from '../contexts/Auth'
import { Oswald } from "@next/font/google"
import Login from './Login'
import "../styles/globals.css"

// const oswald = Oswald()

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider fallback={<Login />}>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
