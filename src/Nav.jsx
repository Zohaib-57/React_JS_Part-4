import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='m-5 bg-green-500  flex justify-center items-center'>
        <Link to="/" className='border border-black px-5 py-1 rounded-md m-3'>Home</Link>
        <Link className='border border-black px-5 py-1 rounded-md m-3' to="/login">Login</Link>
        <Link className='border border-black px-5 py-1  rounded-md m-3' to="/signup">SignUp</Link>
    </div>
  )
}

export default Nav