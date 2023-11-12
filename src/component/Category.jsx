
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faGift, faLaptop, faMobile, faShirt } from '@fortawesome/free-solid-svg-icons';


function Category() {
    return (
      <div>
        <h1 className='text-center pt-12 text-3xl font-bold hover:underline '>Top Category</h1>
        <div className='flex px-12 py-28 justify-between'>
          <div className='text-center bg-blue-100 w-40 h-44 rounded-full hover:bg-pink-200'>
          <FontAwesomeIcon className='w-20 h-24' icon={faMobile} />
            <h2 className='font-bold'>
              
              Mobile Phone
            </h2>
            
            
          </div>
          <div className='text-center bg-blue-100 w-40 h-44 rounded-full hover:bg-pink-200'>
          <FontAwesomeIcon className='w-28 h-32' icon={faLaptop} />
            <h2>
              
              Laptop
            </h2>
            
          </div>
          <div className='text-center bg-blue-100 w-40 h-44 rounded-full hover:bg-pink-200'>
          <FontAwesomeIcon className='w-28 h-32' icon={faShirt} />
            <h2>
              
              Fashion
            </h2>
           
          </div>
          <div className='text-center bg-blue-100 w-40 h-44 rounded-full hover:bg-pink-200'>
          <FontAwesomeIcon className='w-28 h-32' icon={faChild} />
            <h2>
              
              Child
            </h2>
          
            
          </div>
          <div>
          <div className='text-center bg-blue-100 w-40 h-44 rounded-full hover:bg-pink-200'>
          <FontAwesomeIcon className='w-28 h-32' icon={faGift} />
            <h2>
              
              Gift
            </h2>
        </div>
      </div>
      </div>
      </div>
      
    );
  }
  
  export default Category;
  