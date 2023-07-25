import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { handleCheckoutStep, selectedCheckoutStep, setAddress } from "./CheckOutSlice";
import { useForm } from "react-hook-form";
import { selectUserInfo, updateUserAsync } from "../user/userSlice";
// import { selectLoggedInUser, updateUserAsync } from "../auth/authSlice";
// import CheckOutSteps from "./CheckOutSteps";



const Address = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectUserInfo);
  const step = useSelector(selectedCheckoutStep);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddress = (e) =>{
    setSelectedAddress(user.addresses[e.target.value]);
  }
  const handleShippingAddress =() =>{
    if(selectedAddress){
      dispatch(setAddress({selectedAddress}))
    }
  }

  useEffect(() => {
    // Scroll to the top of the document when the component re-renders
    window.scrollTo(0, 0);
  },[step]);

  useEffect(()=>{
    dispatch(handleCheckoutStep(1));
  },[step]);

  return (
    <div>
      <form className="bg-white px-5 py-8" noValidate onSubmit={handleSubmit((data)=>{
        dispatch(updateUserAsync({
          ...user, addresses:[...user.addresses, data]
        }))
        reset();
      })}>
        <div className="space-y-6">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('name', {
                      required: 'name is required',
                    })}
                    id="name"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                          <p className="text-red-500">{errors.name.message}</p>
                        )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'phone is required',
                    })}
                    id="phone"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && (
                          <p className="text-red-500">{errors.phone.message}</p>
                        )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('street', {
                      required: 'street address is required',
                    })}
                    id="street"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.street && (
                          <p className="text-red-500">{errors.street.message}</p>
                        )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('city', {
                      required: 'City address is required',
                    })}
                    id="city"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.city && (
                          <p className="text-red-500">{errors.city.message}</p>
                        )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('region', {
                      required: 'State is required',
                    })}
                    id="region"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.region && (
                          <p className="text-red-500">{errors.region.message}</p>
                        )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="pin"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('pin', {
                      required: 'Pincode is required',
                    })}
                    id="pin"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.pin && (
                          <p className="text-red-500">{errors.pin.message}</p>
                        )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md !bg-[#f63b60] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:!bg-[#ed6e51] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Address
            </button>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Addresses
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Choose from Existing addresses
            </p>
            <ul role="list">
              {user.addresses.map((address, index) => (
                <li
                  key={address.email}
                  className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                >
                  <div className="flex gap-x-4">
                    <input
                      name="address"
                      value={index}
                      onClick={handleAddress}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {address.name}
                      </p>
                      <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        {address.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {address.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {address.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {address.city}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link
          onClick={handleShippingAddress}
            to={"/checkout/ordersummary"}
            className="flex items-center justify-center rounded-md border border-transparent !bg-[#f63b60] px-6 py-3 text-base font-medium text-white shadow-sm hover:!bg-[#f43b50]"
          >
            CONTINUE
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Address;

{
  /* <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Payment Methods
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Choose One
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="cash"
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="cash"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="card"
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="card"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Card Payment
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div> */
}
