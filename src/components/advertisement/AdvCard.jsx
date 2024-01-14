import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AdvCard({ result }) {
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl border-2">
      <Link href={`/categorylist/${result.dashboardId}`}>
        <div className="cursor-pointer hover:bg-gray-100 rounded-lg transition duration-150 ease-in-out">
          {/* Use flexbox to center the image */}
          <div className="flex justify-center items-center w-full h-60 p-5">
            <Image
              width={500} // Adjust as needed
              height={200} // Adjust as needed
              alt="Unskoolify-Online Education"
              src={result.image_url}
              className="rounded-md" // Optional: for rounded corners
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
