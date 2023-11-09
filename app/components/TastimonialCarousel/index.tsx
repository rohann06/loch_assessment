"use client";
import React from "react";

const images = [
  {
    url: "./comment1.png",
    alt: "c1",
    style: "w-[353px] h-full",
  },
  {
    url: "./comment2.png",
    alt: "c2",
    style: "w-[353px] h-full",
  },
  {
    url: "./comment3.png",
    alt: "c3",
    style: "w-[531px] h-full",
  },
];

const TastimonialCarousel = () => {
  return (
    <div className=" flex items-center gap-x-[14px] h-[136px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className={image.style}
        />
      ))}
    </div>
  );
};

export default TastimonialCarousel;
