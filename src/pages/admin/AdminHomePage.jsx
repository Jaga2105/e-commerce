import React from 'react'
import NavBar from '../../features/navbar/NavBar'
import AdminProductList from '../../features/admin/AdminProductList'

const Home = () => {
  return (
    <div>
      <NavBar>
        <AdminProductList/>
      </NavBar>
    </div>
  )
}

export default Home