"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function CartCard({ result }) {
  const [selectedImage, setSelectedImage] = useState(result.image_url);
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="mmx-auto p-1 bg-white rounded-lg shadow-md my-1">
      <div className="flex flex-row items-center">
        {/* Main Product Image */}
        <div className="md:w-1/5 flex justify-center md:justify-start">
          <Image
            src={selectedImage}
            alt={result.product_name}
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-4/5 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold capitalize">
              {result.product_name}
            </h2>
            <div className="flex items-center mt-2">
              <p className="text-sm md:text-md line-through text-gray-500">
                MRP: {result.old_price}
              </p>
              <p className="text-md md:text-lg font-bold text-green-500 ml-3">
                Rs {result.price}
              </p>
            </div>
            <p className="text-sm md:text-md text-red-500">
              Save: {result.discount}
            </p>
            <p className="text-sm md:text-md">
              {result.unit} {result.measure_unit}
            </p>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              className="text-white bg-warning hover:bg-warning-dark rounded-full h-8 w-8 flex items-center justify-center"
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="text-lg mx-3">{quantity}</span>
            <button
              className="text-white bg-warning hover:bg-warning-dark rounded-full h-8 w-8 flex items-center justify-center"
              onClick={incrementQuantity}
            >
              +
            </button>
            <button className="text-white bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 ml-auto">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
