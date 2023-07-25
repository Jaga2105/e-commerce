import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { resetCartAsync } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { resetCurrentOrder } from '../features/order/orderSlice';
import { resetCheckoutStep } from '../features/checkout/CheckOutSlice';

const OrderSuccessPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);

    useEffect(()=>{
        dispatch(resetCartAsync(user.id));
        dispatch(resetCurrentOrder());
        dispatch(resetCheckoutStep());
    },[user])
  return (
    <>
     <main className="h-full place-items-center bg-white rounded-xl mt-16 px-6 py-24 mx-10 sm:mx-20 md:mx-40 lg:mx-60 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-green-600">Order Successfully Placed</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Order Number #{params?.id}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {"You can check your order in My Account > My Orders"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-success-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main></>
  )
}

export default OrderSuccessPage