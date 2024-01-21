import React from "react";

export default function ProductAccordion({ productDescription }) {
  return (
    <div
      className="custom-ul-style bg-gray-50"
      dangerouslySetInnerHTML={{ __html: productDescription }}
    />
  );
}
