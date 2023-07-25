import React from 'react'
import NavBar from '../features/navbar/NavBar';
import UserOrders from '../features/user/UserOrders';

const UserOrderPage = () => {
    return (
        <div>
          <NavBar>
            {/* <div className='mx-auto'> */}
                <h1 className='mx-auto text-3xl px-2 font-bold'>My Orders</h1>
                <UserOrders></UserOrders>
            {/* </div> */}
            
          </NavBar>
        </div>
      );
}

export default UserOrderPage