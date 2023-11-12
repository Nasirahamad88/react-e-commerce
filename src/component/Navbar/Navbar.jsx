"use client"
import React from 'react';
import  {Link} from 'react-router-dom'
import { Button } from 'keep-react';
import { ShoppingCart } from "phosphor-react";


import logo from '../../images/Logo.svg'
const Navbar = () => {
    return (
        <div className='flex justify-between w-[90%] px-20 py-10 bg-blue-900 '>
           <div>
           <Link to='/'><img src={logo} alt="" /></Link>
           </div>
           
           <nav className=" text-white font-bold flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link className="px-5 hover:text-gray-200" href="/">
          Home
        </Link>
        <Link className="px-5 hover:text-gray-200" to="/shop">
          Shop
        </Link>
        <Link className="px-5 hover:text-gray-200" to="/order">
          Order
        </Link>
        <Link className="px-5 hover:text-gray-200" to="/login">
          Login
        </Link>
        <Link className="px-5 hover:text-gray-200" to="/sign-up">
          Sign Up
        </Link>
      </div>

      <Link to='/Cart'>
      <div className="flex items-center">
        <Button size="md" type="primary" circle={true}>
          <span>
            <ShoppingCart size={24} />
          </span>
        </Button>
      </div></Link>
    </nav>
           
          
        </div>
    );
};

export default Navbar;