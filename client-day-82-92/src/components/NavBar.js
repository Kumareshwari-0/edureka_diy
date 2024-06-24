import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex items-center'>
      <Link to={'/'}  className='text-white px-3 py-2'>Home</Link>
      
      <Link  className='text-white px-3 py-2'>About</Link>
      <Link className='text-white px-3 py-2'>Order</Link>
      <Link className='text-white px-3 py-2'>Contact</Link>
    </div>
  );
}

export default NavBar;
