"use clent"
import React from "react";
import NotificationCard from "../NotificationCard";
import NotificationCard2 from "../NotificationCard2";

const NotificationCarousal = () => {
  return (
    <div className=" flex flex-row gap-x-[14px]">
      <NotificationCard />
      <NotificationCard2
        icon={"bar-chart-2.png"}
        dec={"Notify me when any wallets move more thanx"}
        numbers={"$1,000.00"}
      />
      <NotificationCard2
        icon={"clock.png"}
        dec={"Notify me when any wallets move more thanx"}
        numbers={"> 30 days"}
        dec2="becomes active"
      />
    </div>
  );
};

export default NotificationCarousal;
