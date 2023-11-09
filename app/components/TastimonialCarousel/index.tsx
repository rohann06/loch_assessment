"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1450 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 1.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      className="h-[136px] w-full"
      arrows={false}
      responsive={responsive}
      focusOnSelect={true}
      infinite={true}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className={image.style}
          draggable={false}
        />
      ))}
    </Carousel>
  );
};

export default TastimonialCarousel;
