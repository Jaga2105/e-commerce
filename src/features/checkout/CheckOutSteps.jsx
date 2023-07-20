import React from 'react'

const CheckOutSteps = () => {
    const active = 2;
  return (
    <div className='flex justify-center items-center pt-10'>
        <div className="flex items-center flex-wrap">
               <div className={`flex items-center`}>
                <div className={`flex items-center justify-center cursor-pointer px-3 py-2 rounded-3xl bg-[#f63b60]`}>
                       <span className={`text-white`}>1. Delivery Address</span>
                </div>
                <div className={`${
                    active > 1 ? "w-[30px] lg:w-[70px] h-[4px] !bg-[#f63b60]"
                    : "w-[30px] lg:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
               </div>

               <div className={`flex items-center`}>
                <div className={`${active > 1 ? `justify-center cursor-pointer px-3 py-2 rounded-3xl bg-[#f63b60]` : `justify-center cursor-pointer px-3 py-2 rounded-3xl bg-[#f63b60]!bg-[#FDE1E6]`}`}>
                    <span className={`${active > 1 ? `text-white` : `text-black`}`}>
                        2. Order Summary
                    </span>
                </div>
               </div>

               <div className={`flex items-center`}>
               <div className={`${
                    active > 3 ? "w-[30px] lg:w-[70px] h-[4px] !bg-[#f63b60]"
                    : "w-[30px] lg:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
                <div className={`${active > 2 ? `flex items-center justify-center cursor-pointer px-3 py-2 rounded-3xl bg-[#f63b60]` : `flex items-center justify-center cursor-pointer px-3 py-2 rounded-3xl !bg-[#FDE1E6]`}`}>
                    <span className={`${active > 2 ? `text-white` : `text-black`}`}>
                        3. Payment
                    </span>
                </div>
               </div>
        </div>
    </div>
  )
}

export default CheckOutSteps