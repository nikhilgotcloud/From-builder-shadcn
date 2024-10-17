import React from 'react' // {{ edit_1 }}
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center items-center h-[75vh] space-y-4">
      <h2 className="text-3xl font-bold">404 - Page not found</h2>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  )
}
