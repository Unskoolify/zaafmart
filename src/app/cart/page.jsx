import React from "react";
import CartCard from "./CartCard";

export default function Cart() {
  const results = [
    {
      _id: "61c44c717359058abc251456",
      product_name: "green apple green apple  green apple ",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/ByvVfzF/c754858d910e.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 279,
      old_price: 299,
      measure_unit: "kg",
      discount: 20,
    },
    {
      _id: "61c44c717359058abc251456",
      product_name: "green apple",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/ByvVfzF/c754858d910e.jpg",
      altTag: "",
      title: "",
      unit: 2.5,
      price: 699,
      old_price: 699,
      measure_unit: "kg",
      discount: -608,
    },
    {
      _id: "61c44ed87359058abc2514c5",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cc1b2785194ae9f9268",
      product_name: "papaya - papita 1 to 1.5 kg",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/tKrrbFg/0ae7552c0f0f.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 60,
      old_price: 72,
      measure_unit: "kg",
      discount: 12,
    },
    {
      _id: "61c44ed87359058abc2514c5",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cc1b2785194ae9f9268",
      product_name: "papaya - papita 1 to 1.5 kg",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/tKrrbFg/0ae7552c0f0f.jpg",
      altTag: "",
      title: "",
      unit: 2.5,
      price: 140,
      old_price: 158,
      measure_unit: "kg",
      discount: 18,
    },
    {
      _id: "61c451a67359058abc2514e1",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cfeb2785194ae9f928f",
      product_name: "kiwi { 3 piece per packet}",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2578952dc068d5a1f1a",
      brand_name: "other",
      image_url: "https://i.ibb.co/376jBvS/70e26cf79cb0.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 139,
      old_price: 150,
      measure_unit: "packet",
      discount: 11,
    },
  ];
  return (
    <div className="body-font mt-5 mb-16">
      <div className="mx-auto flex flex-wrap -m-4">
        {/* Parent container for both sections */}
        <div className="flex flex-wrap w-full">
          {/* 70% width column */}
          <div className="sm:pl-2 w-full md:w-3/5">
            <div className="flex flex-col justify-between h-full">
              {/* Grid of cards in the 70% width column */}
              <div className="">
                {results.map((result, index) => (
                  <CartCard key={index} result={result} />
                ))}
              </div>
            </div>
          </div>
          {/* 30% width column */}
          <div className="pt-2 pl-2 w-full md:w-2/5 pr-2">
            <div className="rounded-lg bg-white shadow-md p-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span className="text-md font-medium text-gray-600">
                  Subtotal
                </span>
                <span className="text-md font-medium text-gray-600">
                  $200.00
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-md font-medium text-gray-600">
                  Tax (10%)
                </span>
                <span className="text-md font-medium text-gray-600">
                  $20.00
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-md font-medium text-gray-600">
                  Discount
                </span>
                <span className="text-md font-medium text-red-500">
                  -$30.00
                </span>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="flex justify-between mb-4">
                <span className="text-lg font-bold text-gray-800">
                  Total Amount
                </span>
                <span className="text-lg font-bold text-gray-800">$190.00</span>
              </div>

              <button className="btn btn-primary w-full py-3 mt-2">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="mb-16">
    //   <div className=" p-1 flex flex-col justify-between h-full">
    //     {/* Grid of cards in the 70% width column */}
    //     <div className="rounded-lg bg-white">
    //       {results.map((result, index) => (
    //         <CartCard key={index} result={result} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
