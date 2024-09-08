import React from 'react'
import TopScreen from '../TopScreen';
import Menu from '../Menu';

const Navbar = () => {
  return (
    <div className='lg:mx-20 lg:mt-10'>
      <TopScreen />
      <Menu />
    </div>
  );
}

export default Navbar