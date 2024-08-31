import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="w-full h-full py-16 bg-black">
        <div className='w-[30%] h-[500px] bg-[#d9d9d9] rounded-2xl mx-auto flex flex-col items-center p-5'>
            <h1 className='text-2xl '>Sign In</h1>
            <form className='flex flex-col'>
              <input type="text" name="" id="name" placeholder='username'/>
              <input type="text" name="" id="password" placeholder='password'/>
              <button>Login</button>
            </form>
            <h2>Sudah Punya akun? <a href='/sign-in'>Masuk disini</a> </h2>
        </div>   
    </div>
  )
}

export default page