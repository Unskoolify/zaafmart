import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CategoryCard({ result }) {
  return (
    <div className="p-4">
      <Link href={`/category/categoryname/${result.dashboardId}`}>
        <div className="block hover:bg-gray-100 rounded-lg transition duration-150 ease-in-out cursor-pointer">
          <div className="flex flex-col items-center">
            {/* Circular Image Container */}
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg bg-green-300">
              <Image
                width={160}
                height={160}
                className="object-cover"
                alt={result.category_name}
                src={result.image_url}
              />
            </div>
            <div className="pt-2 text-center">
              <h2 className="text-gray-900 text-sm font-medium sm:text-lg hover:text-blue-500 capitalize">
                {result.category_name}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
