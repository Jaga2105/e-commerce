import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    checkOutDetails: {},
    checkOutStep:null,
}
const checkOutSlice = createSlice({
    name:"checkout",
    initialState,
    reducers:{
        setAddress: (state,action)=>{
            state.checkOutDetails = { ...state.checkOutDetails, ...action.payload };
            console.log(state.checkOutDetails.selectedAddress);
        },
        resetAddress: (state)=>{
            state.checkOutDetails= {};
        },
        handleCheckoutStep: (state,action) =>{
            state.checkOutStep = action.payload;
        },
        resetCheckoutStep: (state)=>{
            state.checkOutStep = null;
        }
    }
})

export const {setAddress, resetAddress, handleCheckoutStep, resetCheckoutStep} = checkOutSlice.actions;

export const shippingAddress = (state)=>state.checkout.checkOutDetails.selectedAddress;
export const selectedCheckoutStep = (state)=> state.checkout.checkOutStep;
export default checkOutSlice.reducer;