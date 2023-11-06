import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='flex justify-between w-[90%] px-20 py-10'>
           <div>
           <img src={logo} alt="" />
           </div>
           <nav className='nav'>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Order</a>
            <a href="">Login</a>
           </nav>

        </div>
    );
};

export default Header;