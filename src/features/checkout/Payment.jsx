import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedItems } from "../cart/cartSlice";
import { handleCheckoutStep, selectedCheckoutStep, shippingAddress } from "./CheckOutSlice";
import { createOrderAsync, selectCurrentOrder } from "../order/orderSlice";
import { Navigate } from "react-router-dom";
import { selectUserInfo } from "../user/userSlice";

const Payment = () => {

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState(null);

  const items = useSelector(selectedItems);
  const user = useSelector(selectUserInfo);
  const deliveryAddress = useSelector(shippingAddress);
  const currentOrder = useSelector(selectCurrentOrder);
  const step = useSelector(selectedCheckoutStep);
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handlePayment = (e) =>{
    setPaymentMethod(e.target.value);
  }
  const handleOrder = () =>{
    if(paymentMethod){
      const order ={
        items,
        totalAmount,
        totalItems,
        user,
        paymentMethod,
        deliveryAddress,
        status:"pending"
      }
      dispatch(createOrderAsync(order));
    }
    else{
      alert("choose any payment option");
    }
  }

  useEffect(()=>{
    dispatch(handleCheckoutStep(3));
  },[step]);
  return (
    <div className="mt-10 space-y-10 p-10 ">
      { currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true}></Navigate>}
      <fieldset>
        <legend className="text-lg font-semibold leading-6 text-gray-900 mb-2">
          Payment Methods
        </legend>
        <p className="mt-1 text-lg leading-6 text-gray-600">Choose One</p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3 ">
            <input
              id="cash"
              name="payments"
              onChange={handlePayment}
              value="cash"
              type="radio"
              checked={paymentMethod === "cash"}
              className="h-4 w-4 border-gray-300 text-[#f63b60] focus:ring-[#f63b60]"
            />
            <label
              htmlFor="cash"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              {"Cash On Delivery ( COD )"}
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="card"
              onChange={handlePayment}
              name="payments"
              checked={paymentMethod === "card"}
              value="card"
              type="radio"
              className="h-4 w-4 border-gray-300 text-[#f63b60] focus:ring-[#f63b60]"
            />
            <label
              htmlFor="card"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Card Payment
            </label>
          </div>
        </div>
        <div className="mt-20">
          <button
            // to={"/checkout/payment"}
            onClick={handleOrder}
            className="w-[60%] mx-auto flex items-center justify-center rounded-md border border-transparent !bg-[#f63b60] px-6 py-1 text-md font-medium text-white shadow-sm hover:!bg-[#f43b50]"
          >
            Confirm Order
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Payment;
