import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardCategory({result}) {
  return (
    <div>
        <Link href={`/categorylist/${result.dashboardId}`}>
        <div className="flex flex-col items-center">
          <div className="w-50 h-50 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
            <Image
              width={200}
              height={200}
              className="object-cover object-center"
              alt="Unskoolify-Online Education"
              src={result.image_url}
            />
          </div>
          <div>
            <h2 className="text-gray-900 text-sm font-medium sm:text-lg">
              {result.category_name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
