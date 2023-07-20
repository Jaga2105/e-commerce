import React from 'react'
import ProductList from '../features/products/ProductList'
import NavBar from '../features/navbar/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList/>
      </NavBar>
    </div>
  )
}

export default Home