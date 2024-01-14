"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselPage() {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center"
            alt="Unskoolify-Online Education"
            src="https://i.ibb.co/7RDQ5Fx/66176c267c0b.webp"
          />
        </div>
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center"
            alt="Unskoolify-Online Education"
            src="https://i.ibb.co/JCkyJVf/e85987b9f4e0.webp"
          />
        </div>
        <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover object-center"
              alt="Unskoolify-Online Education"
              src="https://i.ibb.co/K6x23Pg/b7238a9f0c64.png"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover object-center"
              alt="Unskoolify-Online Education"
              src="https://i.ibb.co/rvpmjS3/6a5bb0932ce2.webp"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover object-center"
              alt="Unskoolify-Online Education"
              src="https://i.ibb.co/CPK2mGt/62313e2f7555.png"
            />
          </div>
      </Carousel>
    </div>
  );
}
