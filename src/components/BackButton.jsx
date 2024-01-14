import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackButton({title, address, Icon}) {
  const router = useRouter();
  return (
    <div className='sm:hidden mx-1 lg:mx-6 hover:text-[#7a1fa1] flex cursor-pointer text-white mr-5' 
    onClick={() => router.back()}
    >
        <Icon className="text-xl mx-2 my-2"/>
        {/* <p className='my-2 text-sm'>{title}</p> */}
    </div>
  )
}
