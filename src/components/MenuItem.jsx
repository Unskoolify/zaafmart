import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div className='text-white'>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-[#7a1fa1]'>
        <Icon className="text-2xl sm:hidden" />
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
        </Link>
    </div>
  )
}
