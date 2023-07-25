import React from 'react'
import NavBar from '../features/navbar/NavBar'
import UserProfile from '../features/user/UserProfile'

const UserProfilePage = () => {
  return (
    <div>
        <NavBar>
                <h1 className='mx-auto text-3xl px-2 font-bold'>My Profile</h1>
                <UserProfile/>
          </NavBar>
    </div>
  )
}

export default UserProfilePage