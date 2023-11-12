import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [searchTerm, setSearchTerm]=useState('')
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))

    }

    ,[])

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


    return (
        <div className='flex'>
             <div className="w-1/3">
                <input className='mx-12 bg-blue-200 py-2 px-12' placeholder='Search...' value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                ></input>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-4 ">
                {
                    filteredProducts.map(product=><Product
                        key={product.id}
                        product={product}
                        ></Product>)
                }
            </div>
           

        </div>
    );
};

export default Shop;