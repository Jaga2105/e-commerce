import React from 'react'
import ProductList from '../features/products/ProductList'
import NavBar from '../features/navbar/NavBar'
import Footer from '../helpers/Footer'

const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList/>
      </NavBar>
      <Footer/>
    </div>
  )
}

export default Home