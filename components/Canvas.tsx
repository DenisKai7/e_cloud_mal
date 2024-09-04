'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

const Canvas = () => {
  const images = [
    { url: '/test2.jpg' },
    { url: '/test3.jpg' },
    { url: '/test4.jpg' },
  ];
  const names = [
    { name: 'Sarangan' },
    { name: 'New York' },
    { name: 'London' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='relative h-[520px] w-full flex flex-col items-center justify-center'>
      <Image
        src={images[currentIndex].url}
        alt={`Slide ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
      />
      <div className='w-full px-5 flex items-center justify-center text-white z-[1] bg-black h-full bg-opacity-65'>
        <h1 className='playball text-white text-6xl select-none'>{names[currentIndex].name}</h1>
      </div>
      <div className='flex absolute bottom-10 gap-5 rounded-full py-1 px-2 z-[2]'>
        {images.map((_, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer text-white text-[2px] border-white border-2 rounded-full py-1 px-[5px] ${currentIndex === slideIndex ? 'bg-white' : ''}`}
          >
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Canvas