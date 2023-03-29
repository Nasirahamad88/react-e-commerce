import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img, name, seller,quantity, price} =props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            Name={name}
        </div>
    );
};

export default Product;