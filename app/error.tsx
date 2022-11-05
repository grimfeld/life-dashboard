"use client"

import { FC } from 'react'

interface Props {
  error: Error,
  reset: () => void
}

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Error