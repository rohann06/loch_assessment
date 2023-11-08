"use client";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

interface NotificationCard2Props {
  icon: string;
  dec: string;
  numbers: string;
  dec2?: string;
}

const NotificationCard2 = ({
  icon,
  dec,
  numbers,
  dec2,
}: NotificationCard2Props) => {
  return (
    <div className=" w-[189.7px] h-[171.5px] bg-[#FFFFFF] rounded-lg p-[14px] drop-shadow-xl flex flex-col justify-between gap-y-[9px]">
      <div className=" flex justify-between">
        <img src={icon} alt="bell2" className=" h-auto w-[28px]" />
        <div>
          <input type="checkbox" checked />
        </div>
      </div>

      <div className=" flex flex-col gap-y-[14px]">
        <div className=" text-[11px] leading-[13.44px] font-medium">
          <p>{dec}</p>
        </div>
        <div className=" bg-[#E5E5E6] flex items-center gap-2 w-[70px] p-1 rounded-md">
          <p className=" text-[9.1px]">{numbers}</p>
          <AiOutlineCaretDown className={"text-gray-500 text-[10px]"} />
        </div>
        <p className=" text-[11.2px] leading-[13.44px] font-medium">{dec2}</p>
      </div>
    </div>
  );
};

export default NotificationCard2;
