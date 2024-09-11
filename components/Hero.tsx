import React from 'react'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col p-10 text-[#FC9B0A] gap-10 select-none'>
            <h1 className='text-3xl poppins'>Explore <span className='text-white'>|</span> MAGETAN</h1>
            <p>Come and try to enjoy the world
            that you never seen before</p>
        </div>
    </div>  
  )
}

export default Hero