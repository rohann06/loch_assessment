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
    <Marquee
      className={" w-full lg:w-[26  1px] mt-5 lg:mt-0 lg:mb-12"}
      gradient={true}
      gradientColor="black"
      gradientWidth={75}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className=" w-auto h-[158px] md:w-[189.7px] md:h-[168px]"
        />
      ))}
    </Marquee>
  );
};

export default NotificationCarousel;
