import Link from 'next/link'
import React from 'react'

export default function MobFooterMenu({title, address, Icon}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={address} className='hover:text-[#0071dc]'>
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-xl"/>
          <h1 className='text-sm text-center'>{title}</h1>
        </div>
      </Link>
    </div>
  )
}
