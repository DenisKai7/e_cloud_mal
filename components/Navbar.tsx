'use client'
import React from 'react'
import { useState } from 'react';
import LoginModal from './LoginModal';

  

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='flex justify-between poppins absolute top-0 w-full text-white z-20'>
      <div className='bg-[#2a384d] flex flex-row justify-between w-full px-20 py-2 bg-opacity-15 backdrop-blur-sm select-none'>
        <h1 className='select-none text-2xl'>Smart City</h1>
        <div className='flex gap-10 items-center '>
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">News</a>
          <a href="">Contact</a>
          <button onClick={openModal} className='bg-[#2a384d] px-5 py-1 rounded-2xl'>Login</button>
        </div>
      </div>  
        <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default Navbar