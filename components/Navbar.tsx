import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between poppins p-5 absolute top-0 w-full text-white'>
        <h1>Smart City</h1>
        <div className='flex gap-10'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">News</a>
          <a href="">Help</a>
          <a href='/sign-in'>Login</a>
        </div>
    </div>
  )
}

export default Navbar