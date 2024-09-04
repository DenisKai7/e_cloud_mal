import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface LoginModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 select-none">
      <div className="bg-[#1B232F] p-5 rounded-lg shadow-lg w-full max-w-sm">
        <div className='flex ml-[9rem] items-center mb-5'>
            <h2 className="text-2xl text-center text-white font-bold">Login</h2>
            <button
                type="button"
                onClick={closeModal}
                className='w-full ml-[7rem]'
            >
                <FontAwesomeIcon icon={faXmark} className='text-red-500 text-right text-3xl'/>
            </button>
        </div>
        
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 text-white focus:outline-none bg-[#1B232F] border border-gray-300 rounded-md shadow-sm text-sm"
              placeholder="Email/Username"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="mt-1 block w-full text-white focus:outline-none px-3 py-2 bg-[#1B232F] border border-gray-300 rounded-md shadow-sm text-sm"
              placeholder="Password"
            />
          </div>
          <a className='text-sm' href='#'>Lupa Password?</a>
          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
          
        </form>
        <h2 className='text-white text-sm mt-5 text-center'>Belum Punya akun? <a href='/sign-up' className='text-blue-600'>Daftar disini</a> </h2>
      </div>
    </div>
  );
}

export default LoginModal
