import React from "react";
import CarouselPage from "./Carousel";
import ShopCategory from "./shopbycategory/ShopCategory";

export default function HomePage() {
  return (
    <div>
      <CarouselPage />
      <div className="m-5">
        <h1 className="font-bold">Shop By Category</h1>
        <ShopCategory/>
      </div>
    </div>
  );
}
