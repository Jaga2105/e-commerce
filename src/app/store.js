import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import CheckOutSlice from "../features/checkout/CheckOutSlice";
import orderSlice from "../features/order/orderSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        product:productSlice,
        auth: authSlice,
        cart: cartSlice,
        checkout: CheckOutSlice,
        order: orderSlice,
        user: userSlice,
        
    }
})