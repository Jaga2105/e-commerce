import React from "react";
import CheckOutSteps from "../features/checkout/CheckOutSteps";
import { Outlet } from "react-router-dom";
// import CheckOutAmount from "../features/checkout/CheckOutAmount";

const CheckOutPage = () => {
  
  return (
    <div className=" mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="bg-white my-12">
          <CheckOutSteps />
          <Outlet />
        </div>
        {/* <div className="lg:col-span-2">
          <CheckOutAmount />
        </div> */}
      </div>
    </div>
  );
};

export default CheckOutPage;
