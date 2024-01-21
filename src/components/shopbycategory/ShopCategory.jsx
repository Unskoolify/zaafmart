import React from "react";
import CardCategory from "./Card";

export default function ShopCategory() {
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
    {
      is_media: false,
      _id: "61c184c48952dc068d5a20b3",
      image_url: "https://i.ibb.co/XCBTshD/519b2e5814fc.webp",
      category_name: "FruitinX",
      category_id: "61c0f24a8952dc068d5a1f10",
      title: "FruitinX",
      altTag: "Protein eggs and others",
    },
    {
      is_media: false,
      _id: "623f2830b2785194aea0b5c2",
      image_url: "https://i.ibb.co/jgxzk0k/ea8ba102c727.webp",
      category_name: "Snacks",
      category_id: "623f26edb2785194aea0b569",
      title: "Snacks",
      altTag: "Snacks",
    },
  ];
  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-xl border-2 mt-5">
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2 p-4 text-center">
          {results.map((result, index) => (
            <div key={index} className="bg-yellow-100">
              <CardCategory key={index} result={result} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
