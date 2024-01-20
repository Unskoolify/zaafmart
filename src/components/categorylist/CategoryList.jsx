import Image from "next/image";
import React from "react";
import CatCard from "./CatCard";

export default function CategoryList() {
  const results = [
    {
      is_media: false,
      _id: "61c184c48952dc068d5a20ad",
      image_url: "https://i.ibb.co/Pwm1n0t/5ccd44b05b98.webp",
      category_name: "Fresh Fruits",
      category_id: "62111b4cb2785194ae9f924b",
      title: "Fresh Fruits",
      altTag: "Fresh Fruits",
    },
    {
      is_media: false,
      _id: "61e469f88ea81783a9cfa34a",
      image_url: "https://i.ibb.co/SwCL46J/65bb8a1de52d.jpg",
      category_name: "Fresh Vegetables",
      category_id: "61e45ae78ea81783a9cfa212",
      title: "Fresh Vegetables",
      altTag: "Green and Fresh Vegetables",
    },
    {
      is_media: false,
      _id: "620ebb46b2785194ae9f7f06",
      image_url: "https://i.ibb.co/3kPBC5f/029e5bb7926c.webp",
      category_name: "Beverages",
      category_id: "620ebb05b2785194ae9f7ee2",
      title: "Beverages",
      altTag: "Cold soft drink and juice",
    },
    {
      is_media: false,
      _id: "61c184c48952dc068d5a20b2",
      image_url: "https://i.ibb.co/v4g0hdV/9f89c6da120a.webp",
      category_name: "Dates | Dry Fruits",
      category_id: "61c0f2398952dc068d5a1f09",
      title: "Dates | Dry Fruits",
      altTag: "Dates and Dry Fruits",
    },
    {
      is_media: false,
      _id: "61c184c48952dc068d5a20ae",
      image_url: "https://i.ibb.co/1MnMLFv/863837807a64.webp",
      category_name: "Rice | Atta",
      category_id: "62112de5b2785194ae9f979b",
      title: "Rice | Atta",
      altTag: "Rice | Atta",
    },
    {
      is_media: false,
      _id: "61c184c48952dc068d5a20af",
      image_url: "https://i.ibb.co/DV6YD3p/59d3124d4308.webp",
      category_name: "Daal | Oil",
      category_id: "62114285b2785194ae9f9938",
      title: "Daal and Oil",
      altTag: "Daal and Oil",
    },
  ];
  return (
    <div className="text-gray-600 body-font mt-5">
      <div className="mx-auto flex flex-wrap -m-4">
        {/* Parent container for both sections */}
        <div className="flex flex-wrap w-full">
          {/* 30% width column */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg bg-blue-300 p-1 flex flex-col items-center justify-center h-full text-center">
              {/* Content for the 30% width column */}
              <div>
                <span className="text-xl sm:text-5xl text-white font-medium">
                  New Arrivals
                </span>
                <p className="text-sm text-white sm:text-3xl">
                  Fresh Fruits, purchase here
                </p>
              </div>
              <button className="btn btn-outline btn-primary mt-4">View All</button>
            </div>
          </div>

          {/* 70% width column */}
          <div className="sm:pl-2 w-full md:w-2/3">
            <div className="rounded-lg bg-gray-100 p-1 flex flex-col justify-between h-full">
              {/* Grid of cards in the 70% width column */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {results.map((result, index) => (
                  <CatCard key={index} result={result} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
