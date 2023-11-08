import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  description: string;
}

const TestimonialCard = ({ name, role, description }: TestimonialProps) => {
  return (
    <div className=" border border-black bg-[#FFFFFF] rounded-lg w-auto h-[136px] p-[20px] mt-[40px]">
      <div className=" flex items-center gap-x-[8px]">
        <p className=" font-medium">{name}</p>
        <p className=" text-[#96979A] text-[13px]">{role}</p>
      </div>
      <p className=" text-[16px] leading-[19.2px] my-[15px]">{description}</p>
    </div>
  );
};

export default TestimonialCard;
