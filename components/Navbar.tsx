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
      <div className=' flex flex-row justify-center w-full px-20 py-2 select-none'>
        <div className='flex gap-10 items-center '>
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Contact</a>
          <button onClick={openModal} className='px-5 py-1 rounded-2xl'>Login</button>
        </div>
      </div>  
        <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default Navbar