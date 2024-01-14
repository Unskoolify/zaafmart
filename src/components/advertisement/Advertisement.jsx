import React from "react";
import AdvCard from "./AdvCard";

export default function Advertisement() {

    const results = [
        {
            "subcategory_id": [
                "61c0f46f8952dc068d5a1f9d",
                "61c0f47a8952dc068d5a1fa2",
                "61c0f4858952dc068d5a1fa7",
                "61c0f48f8952dc068d5a1fac"
            ],
            "_id": "61c188638952dc068d5a212a",
            "image_url": "https://i.ibb.co/cDSP9TR/b35dc464106c.jpg",
            "category_id": "61c0f24a8952dc068d5a1f10",
            "title": "fruit, protein, eggs",
            "altTag": "fruit, protein, eggs"
        },
        {
            "subcategory_id": [
                "61c0f3988952dc068d5a1f66",
                "61c0f3a58952dc068d5a1f6b",
                "61c0f3b28952dc068d5a1f70",
                "61c0f3c08952dc068d5a1f75",
                "61c0f3d38952dc068d5a1f7a",
                "61c0f3f28952dc068d5a1f7f",
                "61c0f4048952dc068d5a1f84",
                "61c0f40d8952dc068d5a1f89",
                "61c0f4378952dc068d5a1f8e",
                "61c0f4438952dc068d5a1f93",
                "61c0f4518952dc068d5a1f98",
                "61c6df555acb76fb0f65ffd5",
                "61c6e0d15acb76fb0f65fff1",
                "61c6e0ef5acb76fb0f65fff6",
                "61c75718e6318f0c775aede5",
                "61ddb5a98ea81783a9cf9731"
            ],
            "_id": "61c188638952dc068d5a212b",
            "image_url": "https://i.ibb.co/prxdWkL/576693dab68c.jpg",
            "category_id": "61c0f2398952dc068d5a1f09",
            "title": "Date and Dry Fruits",
            "altTag": "Dates and Dry Fruits"
        }
    ]
  return (
    <div className="mt-2">
         <div className="grid sm:grid-cols-2 gap-2 text-center">
          {results.map((result, index) => (
            <div key={index}>
              <AdvCard key={index} result={result} />
            </div>
          ))}
        </div>
      
    </div>
  );
}
