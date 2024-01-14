import React from "react";
import CarouselPage from "./Carousel";
import ShopCategory from "./shopbycategory/ShopCategory";
import Advertisement from "./advertisement/Advertisement";
import CategoryList from "./categorylist/CategoryList";

export default function HomePage() {
  return (
    <div>
      <CarouselPage />
      <div className="m-2 sm:m-5">
        <h1 className="font-bold">Shop By Category</h1>
        <ShopCategory/>
        <Advertisement/>
        <h1 className="mt-5 font-bold">Shop Fruits</h1>
        <CategoryList/>
      </div>
    </div>
  );
}
