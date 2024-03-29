import CardCategory from "@/components/shopbycategory/Card";
import React from "react";
import ProductCard from "./ProductCard";

export default function Product() {
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
      unit: 2,
      price: 269,
      old_price: 320,
      measure_unit: "packet",
      discount: 51,
    },
    {
      _id: "61c600d57359058abc251c14",
      product_name: "royal apple",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "62111b4cb2785194ae9f924e",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/BzpHRyx/3d5828b02870.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 279,
      old_price: 299,
      measure_unit: "kg",
      discount: 20,
    },
    {
      _id: "61c600d57359058abc251c14",
      product_name: "royal apple",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "62111b4cb2785194ae9f924e",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/BzpHRyx/3d5828b02870.jpg",
      altTag: "",
      title: "",
      unit: 2,
      price: 499,
      old_price: 600,
      measure_unit: "kg",
      discount: 101,
    },
    {
      _id: "61c6027a7359058abc251c33",
      product_name: "guava - amrood",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cc1b2785194ae9f9268",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/SszG00B/6b4180b9de5a.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 110,
      old_price: 129,
      measure_unit: "kg",
      discount: 19,
    },
    {
      _id: "61c6027a7359058abc251c33",
      product_name: "guava - amrood",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cc1b2785194ae9f9268",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/SszG00B/6b4180b9de5a.jpg",
      altTag: "",
      title: "",
      unit: 2,
      price: 210,
      old_price: 249,
      measure_unit: "kg",
      discount: 39,
    },
    {
      _id: "61c603c97359058abc251c5a",
      product_name: "pineapple - ananas",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cc1b2785194ae9f9268",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/6NZ8fFF/86c53a3afd6c.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 120,
      old_price: 149,
      measure_unit: "piece",
      discount: 29,
    },
    {
      _id: "61c606037359058abc251c7e",
      product_name: "strawberry",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d0ab2785194ae9f92a1",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      brand_name: "other",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2578952dc068d5a1f1a",
      image_url: "https://i.ibb.co/6gJ8cG6/54dfb09fef96.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 115,
      old_price: 130,
      measure_unit: "packet",
      discount: 15,
    },
    {
      _id: "61c606037359058abc251c7e",
      product_name: "strawberry",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d0ab2785194ae9f92a1",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      brand_name: "other",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2578952dc068d5a1f1a",
      image_url: "https://i.ibb.co/6gJ8cG6/54dfb09fef96.png",
      altTag: "",
      title: "",
      unit: 2,
      price: 220,
      old_price: 249,
      measure_unit: "packet",
      discount: 19,
    },
    {
      _id: "61c60fe27359058abc251e37",
      product_name: "banana",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/HVk0gVX/5dfba53b8f50.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 82,
      old_price: 99,
      measure_unit: "dozen",
      discount: 17,
    },
    {
      _id: "61c6dd635acb76fb0f65ff21",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      product_name:
        "coconut , 1 pc (approx. 300g to 400g)  organically grown - nariyal",
      item_type: "1",
      brand: "61c0f2398952dc068d5a1f0c",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/3fvrxTB/8a3a5e228f12.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 40,
      old_price: 56,
      measure_unit: "piece",
      discount: 16,
    },
    {
      _id: "61c6e9c95acb76fb0f66011b",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      product_name: "american apple",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/yY9KBQ3/62ed3ee6455c.png",
      altTag: "american apple",
      title: "american apple",
      unit: 1,
      price: 149,
      old_price: 178,
      measure_unit: "kg",
      discount: 29,
    },
    {
      _id: "61c6e9c95acb76fb0f66011b",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      product_name: "american apple",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/yY9KBQ3/62ed3ee6455c.png",
      altTag: "american apple",
      title: "american apple",
      unit: 2,
      price: 290,
      old_price: 333,
      measure_unit: "kg",
      discount: 43,
    },
    {
      _id: "61c6eab65acb76fb0f66013b",
      product_name: "pears green - naspati",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cb0b2785194ae9f9263",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/1nhXsMv/cfe52ee43066.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 230,
      old_price: 274,
      measure_unit: "kg",
      discount: 44,
    },
    {
      _id: "61c74f44e6318f0c775aec29",
      product_name: "gooseberry - amla",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/1vJ466r/98d67bb76125.jpg",
      altTag: "",
      title: "",
      unit: 500,
      price: 39,
      old_price: 59,
      measure_unit: "gram",
      discount: 20,
    },
    {
      _id: "61c74f44e6318f0c775aec29",
      product_name: "gooseberry - amla",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/1vJ466r/98d67bb76125.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 69,
      old_price: 99,
      measure_unit: "kg",
      discount: 30,
    },
    {
      _id: "61c75062e6318f0c775aec54",
      product_name: "grapes sonamati, green seedless, angoor",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/D5QP68W/c9756a894eed.jpg",
      altTag: "",
      title: "",
      unit: 500,
      price: 70,
      old_price: 89,
      measure_unit: "gram",
      discount: 19,
    },
    {
      _id: "61c75062e6318f0c775aec54",
      product_name: "grapes sonamati, green seedless, angoor",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/D5QP68W/c9756a894eed.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 140,
      old_price: 159,
      measure_unit: "kg",
      discount: 19,
    },
    {
      _id: "61c7517be6318f0c775aecab",
      product_name: "lemon {green and yellow} - nibu",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/M50FqZ5/fa7888143d5a.jpg",
      altTag: "",
      title: "",
      unit: 6,
      price: 25,
      old_price: 35,
      measure_unit: "piece",
      discount: 10,
    },
    {
      _id: "61c7517be6318f0c775aecab",
      product_name: "lemon {green and yellow} - nibu",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/M50FqZ5/fa7888143d5a.jpg",
      altTag: "",
      title: "",
      unit: 2,
      price: 10,
      old_price: 14,
      measure_unit: "piece",
      discount: 4,
    },
    {
      _id: "61c75301e6318f0c775aecec",
      product_name: "orange -santra 1 kg",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/smSHB4L/d7caf6057f30.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 60,
      old_price: 79,
      measure_unit: "kg",
      discount: 19,
    },
    {
      _id: "61c75499e6318f0c775aed4d",
      product_name: "custard apple - shareefa",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/S0g9DPK/6a9af9ab1f0a.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 149,
      old_price: 169,
      measure_unit: "kg",
      discount: 10,
    },
    {
      _id: "61c7568de6318f0c775aedbf",
      product_name: "pomegranate - aanar,10 bada daana",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/CBpYqFt/9f0c83305e13.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 179,
      old_price: 200,
      measure_unit: "kg",
      discount: 21,
    },
    {
      _id: "61c7568de6318f0c775aedbf",
      product_name: "pomegranate - aanar,10 bada daana",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/CBpYqFt/9f0c83305e13.jpg",
      altTag: "",
      title: "",
      unit: 2.5,
      price: 439,
      old_price: 499,
      measure_unit: "kg",
      discount: 60,
    },
    {
      _id: "61c75828e6318f0c775aedfe",
      product_name: "tender coconut - (medium) 1 pc",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "61c0f2398952dc068d5a1f0c",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/b6rZDTz/61b27ee37ea5.jpg",
      altTag: "",
      title: "",
      unit: 1,
      price: 59,
      old_price: 75,
      measure_unit: "piece",
      discount: 16,
    },
    {
      _id: "61c8858d6532595c29afbbb0",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      product_name: "dragon fruit  - kamalam",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/dMwkv7b/56afbd83b566.png",
      altTag: "dragon",
      title: "dragon",
      unit: 1,
      price: 139,
      old_price: 159,
      measure_unit: "piece",
      discount: 20,
    },
    {
      _id: "61cb4f311239a0cb1c77c66a",
      product_name: "plum - aloo bukhara",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      image_url: "https://i.ibb.co/zJvbVkP/95bb875165a1.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 399,
      old_price: 439,
      measure_unit: "kg",
      discount: 40,
    },
    {
      _id: "61cb4f311239a0cb1c77c66a",
      product_name: "plum - aloo bukhara",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      image_url: "https://i.ibb.co/zJvbVkP/95bb875165a1.png",
      altTag: "",
      title: "",
      unit: 500,
      price: 199,
      old_price: 229,
      measure_unit: "gram",
      discount: 30,
    },
    {
      _id: "61cb4f311239a0cb1c77c66a",
      product_name: "plum - aloo bukhara",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      image_url: "https://i.ibb.co/zJvbVkP/95bb875165a1.png",
      altTag: "",
      title: "",
      unit: 250,
      price: 120,
      old_price: 129,
      measure_unit: "gram",
      discount: 9,
    },
    {
      _id: "61d30dc2f3b899df581bd405",
      product_name: "kinnow orange",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/S7Sw2nh/cda2e0964d60.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 99,
      old_price: 120,
      measure_unit: "kg",
      discount: 21,
    },
    {
      _id: "61d964248ea81783a9cf8762",
      product_name: "black grapes - kala angoor",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      image_url: "https://i.ibb.co/ZLKmXty/dc2d25e78030.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 249,
      old_price: 280,
      measure_unit: "kg",
      discount: 31,
    },
    {
      _id: "61d964248ea81783a9cf8762",
      product_name: "black grapes - kala angoor",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      brand: "61c0f2278952dc068d5a1f05",
      brand_name: "other",
      image_url: "https://i.ibb.co/ZLKmXty/dc2d25e78030.png",
      altTag: "",
      title: "",
      unit: 500,
      price: 129,
      old_price: 139,
      measure_unit: "gram",
      discount: 10,
    },
    {
      _id: "61d96d558ea81783a9cf8946",
      product_name: "chiku ( sapatu )",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/HhkD7nc/15b8ec1fc9de.jpg",
      altTag: "chiku ( sapatu )",
      title: "chiku ( sapatu )",
      unit: 500,
      price: 59,
      old_price: 79,
      measure_unit: "gram",
      discount: 20,
    },
    {
      _id: "61d96d558ea81783a9cf8946",
      product_name: "chiku ( sapatu )",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/HhkD7nc/15b8ec1fc9de.jpg",
      altTag: "chiku ( sapatu )",
      title: "chiku ( sapatu )",
      unit: 1,
      price: 110,
      old_price: 139,
      measure_unit: "kg",
      discount: 29,
    },
    {
      _id: "61eb387b8ea81783a9cfd443",
      product_name: "italian fuji",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/KydR7LG/a9e4d39bb83d.png",
      altTag: "italian royal apple",
      title: "italian royal apple",
      unit: 1,
      price: 279,
      old_price: 300,
      measure_unit: "kg",
      discount: 21,
    },
    {
      _id: "61eb387b8ea81783a9cfd443",
      product_name: "italian fuji",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/KydR7LG/a9e4d39bb83d.png",
      altTag: "italian royal apple",
      title: "italian royal apple",
      unit: 500,
      price: 149,
      old_price: 165,
      measure_unit: "gram",
      discount: 16,
    },
    {
      _id: "61eb3aef8ea81783a9cfd494",
      product_name: "apple delition",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ca5b2785194ae9f925e",
      item_type: "1",
      brand: "61c0f2198952dc068d5a1efe",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/QjPkXxw/90ab286edb23.png",
      altTag: "apple delition",
      title: "apple delition",
      unit: 1,
      price: 129,
      old_price: 225,
      measure_unit: "kg",
      discount: 26,
    },
    {
      _id: "61eb3fcd8ea81783a9cfd545",
      product_name: "pomegranate - aanar chota daana",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111d1bb2785194ae9f92a6",
      item_type: "1",
      brand: "61c0f2758952dc068d5a1f28",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/rx5V6Q2/04bb429b624e.png",
      altTag: "",
      title: "",
      unit: 1,
      price: 135,
      old_price: 149,
      measure_unit: "kg",
      discount: 39,
    },
    {
      _id: "61f7d7be62149535fa31bc0c",
      product_name: "banana lady finger",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/wgfr9B5/703d878e1d59.jpg",
      altTag: "chinniawa banana",
      title: "chinniawa banana",
      unit: 1,
      price: 49,
      old_price: 65,
      measure_unit: "dozen",
      discount: 16,
    },
    {
      _id: "61f7d7be62149535fa31bc0c",
      product_name: "banana lady finger",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/wgfr9B5/703d878e1d59.jpg",
      altTag: "chinniawa banana",
      title: "chinniawa banana",
      unit: 1,
      price: 55,
      old_price: 69,
      measure_unit: "dozen",
      discount: 14,
    },
    {
      _id: "61ff8f6a09d858cab2c1af00",
      product_name: "sarda fruit",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cedb2785194ae9f928a",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/r44W5FL/57451866a595.png",
      altTag: "sarda fruit",
      title: "sarda fruit",
      unit: 1,
      price: 149,
      old_price: 167,
      measure_unit: "kg",
      discount: 18,
    },
    {
      _id: "61ff9afa09d858cab2c1b0c6",
      product_name: "jackfruit-kathal",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "61c0f2638952dc068d5a1f21",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/k4b4LhT/848fd6d69fb3.png",
      altTag: "jackfruit-kathal",
      title: "jackfruit-kathal",
      unit: 1,
      price: 75,
      old_price: 89,
      measure_unit: "kg",
      discount: 14,
    },
    {
      _id: "62c6b128fee2ee978341f782",
      product_name: "tender coconut (small) 1 pc",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111cd3b2785194ae9f926d",
      item_type: "1",
      brand: "62111b4cb2785194ae9f924e",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/b6rZDTz/61b27ee37ea5.jpg",
      altTag: "tender coconut",
      title: "tender coconut",
      unit: 1,
      price: 55,
      old_price: 79,
      measure_unit: "piece",
      discount: 19,
    },
    {
      _id: "62deb86afee2ee9783425049",
      product_name: "cut pineapple  - ananas",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "62111b4cb2785194ae9f924e",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/dPsx5H4/edca78d72d9a.png",
      altTag: "pine apple",
      title: "pine apple",
      unit: 1,
      price: 60,
      old_price: 70,
      measure_unit: "half",
      discount: 10,
    },
    {
      _id: "62deb86afee2ee9783425049",
      product_name: "cut pineapple  - ananas",
      category_name: "62111b4cb2785194ae9f924b",
      sub_category: "62111ce3b2785194ae9f9285",
      item_type: "1",
      brand: "62111b4cb2785194ae9f924e",
      brand_name: "other",
      vendor: "61c0ef898952dc068d5a1e9a",
      vendor_name: "Zaaf Dry and Fruits",
      image_url: "https://i.ibb.co/dPsx5H4/edca78d72d9a.png",
      altTag: "pine apple",
      title: "pine apple",
      unit: 1,
      price: 110,
      old_price: 125,
      measure_unit: "full",
      discount: 15,
    },
  ];
  return (
    <div className="body-font mt-5 mb-16">
    <div className="mx-auto flex flex-wrap -m-4">
      {/* Parent container for both sections */}
      <div className="flex flex-wrap w-full">
        {/* 30% width column */}
        <div className="pt-2 pl-2 w-full md:w-1/6">
          <div className="rounded-lg bg-white p-1 flex flex-col items-center justify-center text-center">
            {/* Content for the 30% width column */}
            <div>
              <span className="text-xl sm:text-5xl text-black font-medium">
                New Arrivals
              </span>
              <p className="text-sm text-black sm:text-3xl">
                Fresh Fruits, purchase here
              </p>
            </div>
            <button className="btn btn-outline btn-primary mt-4">View All</button>
          </div>
        </div>

        {/* 70% width column */}
        <div className="sm:pl-2 pt-2 w-full md:w-5/6">
          <div className="rounded-lg bg-white p-1 flex flex-col justify-between h-full">
            {/* Grid of cards in the 70% width column */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-0.5">
              {results.map((result, index) => (
                <ProductCard key={index} result={result} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
