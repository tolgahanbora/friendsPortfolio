import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <nav className="container mx-auto my-7 px-4 md:px-8 lg:px-20">
    <div className="flex items-center justify-between mx-15">
      <div className="ml-2 md:ml-8">
        <Link href="/">
        <img src="/can..png" alt="Logo" className="h-7" />
        </Link>
       
      </div>
      <Link className="mr-2 md:mr-8 text-gray-600 text-md font-bold"  href="/about">
        About Me
      </Link>
    </div>
  </nav>
  )
}

export default nav