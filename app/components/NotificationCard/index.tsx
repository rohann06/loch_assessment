import React from "react";

const NotificationCard = () => {
  return (
    <div className=" w-[189.7px] h-[171.5px] bg-[#FFFFFF] rounded-lg p-[14px] drop-shadow-xl">

      <div className=" flex justify-between">
        <img src="./bell.png" alt="bell2" className=" h-auto w-[28px]" />
        <div>
          <p className=" text-[9.1px] leading-[10.92px] font-semibold">Save</p>
        </div>
      </div>

      <div className=" my-[14px] text-[14px] leading-[16.8px] font-medium">
        <p>We'll be sending notifications to you here</p>
      </div>

      <div className=" w-full h-[35px] rounded-lg bg-white border text-xs p-2">
        Hetto@gmail.com
      </div>
    </div>
  );
};

export default NotificationCard;
