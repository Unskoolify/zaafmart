"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductDetailCard({ result }) {
  const [selectedImage, setSelectedImage] = useState(result.image_url);
  const [quantity, setQuantity] = useState(1); // State to track quantity

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col md:flex-row overflow-hidden">
        {/* Image Thumbnails */}
        <div className="flex flex-row md:flex-col md:w-1/6 overflow-x-auto md:overflow-y-auto">
          {result.imageList.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 h-24 object-cover cursor-pointer p-1"
              onClick={() => setSelectedImage(imgUrl)}
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="md:w-2/5 flex">
          <Image
            src={selectedImage}
            alt={result.product_name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-2/5 p-4 flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold capitalize-text">
            {result.product_name}
          </h2>
        
          <div className="flex items-center mt-2">
            <p className="text-md line-through text-gray-500">
              MRP: {result.old_price}
            </p>
            <p className="text-2xl font-bold text-green-500 ml-5">
              Price: Rs {result.price}
            </p>
            <p className="text-md ml-3">
            {result.unit} {result.measure_unit}
          </p>
          </div>

          <p className="text-md text-red-300">You Save: {result.discount}</p>
          <p className="text-md font-bold mt-1">Product Info</p>
          <div
            className="custom-ul-style"
            dangerouslySetInnerHTML={{ __html: result.product_description }}
          />
          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              className="btn btn-outline btn-warning mr-2"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="btn btn-outline btn-warning ml-2"
              onClick={incrementQuantity}
            >
              +
            </button>
            <button className="btn btn-warning ml-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
