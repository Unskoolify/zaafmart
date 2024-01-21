"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProductCard({ result }) {
  const pathname = usePathname()
  return (
    <Link href={`${pathname}/product-details/product-name/${result.dashboardId}`} passHref>
      <div className="bg-white m-2 sm:m-5 cursor-pointer hover:bg-gray-100 rounded-lg transition duration-150 ease-in-out">
        <div className="flex flex-row sm:flex-col items-center">
          <div className="w-40 h-40 sm:w-50 sm:h-50 mr-3 inline-flex items-center justify-center rounded-full overflow-hidden">
            <Image
              width={200}
              height={200}
              alt={result.product_name}
              src={result.image_url}
              className="object-cover"
            />
          </div>
          <div className="flex-1 pt-2">
            <h2 className="text-lg font-semibold capitalize-text">{result.product_name}</h2>
            <p className="text-sm">
              {result.unit} {result.measure_unit}
            </p>
            <p className="text-sm line-through text-gray-500">
              MRP {result.old_price}
            </p>
            <p className="text-lg font-bold text-green-500">Price {result.price}</p>
            <p className="text-sm">Save {result.discount}</p>
            <div className="flex justify-center w-full mt-2 mb-2">
              <button className="btn btn-warning">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
