import React from 'react'

const CheckOutAmount = () => {
  return (
    <div className='bg-white px-5 py-8 mt-12 flex flex-col gap-6'>
        <h1 className='font-bold'>PRICE DETAILS</h1>
        <hr />
        <div className="flex justify-between">
            <h2>Price(1 item)</h2>
            <h2>&#x20b9; 384</h2>
        </div>
        <div className="flex justify-between">
            <h2>Delivery Charges</h2>
            <h2>FREE</h2>
        </div>
        <hr />
        <div className="flex justify-between">
            <h2 className='font-bold text-lg'>Total Payable</h2>
            <h2 className='font-bold text-lg'>&#x20b9; 384</h2>
        </div>
        <button className='w-full !bg-[#f63b60] text-white text-xl py-2 rounded-lg mt-4'>
            CONTINUE
        </button>
    </div>
  )
}

export default CheckOutAmount