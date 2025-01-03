import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='m-5 bg-gradient-to-r from-green-400 to-green-600 flex justify-center items-center py-4 rounded-lg shadow-md'>

      <Link 
        to="/" 
        className='border border-transparent px-6 py-2 rounded-md m-3 bg-white text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300'>Home
      </Link>
      
      <Link 
        to="/login" 
        className='border border-transparent px-6 py-2 rounded-md m-3 bg-white text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300'>Login
      </Link>
      
      <Link 
        to="/signup" 
        className='border border-transparent px-6 py-2 rounded-md m-3 bg-white text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300'>Sign Up
      </Link>

    </div>
  );
};

export default Nav;
