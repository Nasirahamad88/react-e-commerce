import React, { useState } from 'react';


const Product = (props) => {
    

    const {img, name, seller,quantity, price,category,ratingsCount} =props.product;
    return (
        
        <div className="bg-white shadow-md p-6 rounded-md transition-transform transform hover:scale-105">
      <img className="object-cover w-full h-40 mb-4 rounded-md" src={img} alt={name} />
      <div className="font-bold text-xl mb-2">{name}</div>
      <div className="text-gray-700">${price}</div>
      <div className="text-gray-500 mb-2">{category}</div>
      <div className="text-gray-600 mb-4">{ratingsCount} Ratings</div>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Add To Cart
      </button>
    </div>
    );
};

export default Product;