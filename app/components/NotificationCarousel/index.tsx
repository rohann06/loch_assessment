"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  {
    url: "./Card1.png",
    alt: "c1",
  },
  {
    url: "./Card2.png",
    alt: "c2",
  },
  {
    url: "./Card3.png",
    alt: "c3",
  },
];

const NotificationCarousel = () => {
  return (
    <div className=" flex items-center gap-x-[14px] h-[304px]">
      <Marquee className={" w-[407px]"} gradient={true} gradientColor='black' gradientWidth={65}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className=" w-[189.7px] h-[171.5px]"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default NotificationCarousel;
