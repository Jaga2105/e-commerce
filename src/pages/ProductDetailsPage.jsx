import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductDetails from '../features/products/ProductDetails'
import Footer from '../helpers/Footer'

const ProductDetailsPage = () => {
  
  return (
    <>
    <NavBar>
        <ProductDetails/>
    </NavBar>
    <Footer/>
    </>
  )
}

export default ProductDetailsPage