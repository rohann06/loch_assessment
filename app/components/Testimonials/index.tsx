import React from "react";
import TestimonialCard from "../TestimonialCard";

const details = [
  {
    name: "Jack F",
    role: "Ex Blackrock PM",
    description:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    role: "Research, 3poch Crypto Hedge Fund",
    description:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    role: "Co-Founder Magik Labs",
    description:
      "Managing my own portfolio is helpful and well designed. What's really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];

const Testimonials = () => {
  return (
    <>
      {details.map((detail, indexe) => (
        <TestimonialCard
          key={indexe}
          name={detail.name}
          role={detail.role}
          description={detail.description}
        />
      ))}
    </>
  );
};

export default Testimonials;
