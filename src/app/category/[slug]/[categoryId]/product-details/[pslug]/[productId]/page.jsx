"use client";
import React, { useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
import ProductAccordion from "./ProductAccordion";
import ProductDescription from "./ProductDescription";

export default function ProductDetails() {
  const [openDescription, setOpenDescription] = useState(false);
  const toggle = (index) => {
    if (openDescription == index) {
      return setOpenDescription(null);
    }
    return setOpenDescription(index);
  };

  const results = [
    {
      _id: "61c44c717359058abc251456",
      product_details: [
        {
          details_question: "Descriptions",
          details_answer:
            "<ul><li>Green apples contain a compound called pectin, a fiber source that works as a prebiotic to promote the growth of healthy bacteria in your gut.&#160;</li><li>The pectin found in green apples can help you break down foods more efficiently.&#160;</li><li>High fiber content in green apples can have other impacts on your digestive health as well.</li></ul>",
          status: "true",
        },
        {
          details_question: "Benefits",
          details_answer:
            "<ul><li>Green apples contain a compound called pectin, a fiber source that works as a prebiotic to promote the growth of healthy bacteria in your gut.&#160;</li><li>The pectin found in green apples can help you break down foods more efficiently.&#160;</li><li>High fiber content in green apples can have other impacts on your digestive health as well.</li></ul>",
          status: "true",
        },
        {
          details_question: "Healthy",
          details_answer:
            "<ul><li>Green apples contain a compound called pectin, a fiber source that works as a prebiotic to promote the growth of healthy bacteria in your gut.&#160;</li><li>The pectin found in green apples can help you break down foods more efficiently.&#160;</li><li>High fiber content in green apples can have other impacts on your digestive health as well.</li></ul>",
          status: "true",
        },
      ],
      questions: [
        {
          isDelete: false,
          question: "",
          answer: "",
        },
      ],
      product_name: "green apple",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      product_description:
        "<div><ul><li><span>Green apple is a variety of apple that was first cultivated in Australia</span><span>.</span></li><li><span>&#160;It is believed to have been created as a hybrid.</span></li></ul></div>",
      image_url: "https://i.ibb.co/ByvVfzF/c754858d910e.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 279,
      old_price: 299,
      measure_unit: "kg",
      discount: 20,
      imageList: [
        "https://i.ibb.co/JrxXxdG/c9e6b688f9ad.jpg",
        "https://i.ibb.co/tKrrbFg/0ae7552c0f0f.jpg",
        "https://i.ibb.co/376jBvS/70e26cf79cb0.png",
      ],
    },
  ];
  return (
    <div className="mb-16">
      <div className="p-2 w-full">
        <div className=" p-1 flex flex-col justify-between h-full">
          {/* Grid of cards in the 70% width column */}
          <div className="rounded-lg bg-white">
            {results.map((result, index) => (
              <ProductDetailCard key={index} result={result} />
            ))}
          </div>
          {/* Show product description using Accordion */}
          <div className="rounded-lg bg-white place-items-center mt-1">
            {results.map((resultOb, index) => (
              <div key={index}>
                {resultOb.product_details.map((result, index) => (
                  <ProductDescription
                    key={index}
                    open={index == openDescription}
                    toggle={() => toggle(index)}
                    title={result.details_question}
                    productDescription={result.details_answer}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
