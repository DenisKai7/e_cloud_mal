import React from 'react'
import Image from 'next/image'

const Canvas = () => {
  return (
    <div className='relative h-[520px] w-full bg-[url("/test.svg")] bg-no-repeat bg-cover flex items-center justify-center'>
      <h1 className='playball text-white text-6xl'> Tempat Wisata</h1>
    </div>
  )
}

export default Canvas