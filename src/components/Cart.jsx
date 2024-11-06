import React, { useContext, useEffect, useState } from 'react'
import { DashBoardContext } from '../App'
import CartAndWishListCard from './CartAndWishListCard';
import { getToLocalStorage } from '../Utility/addToDb';

const Cart = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const storedData = getToLocalStorage();
        setProducts(storedData)
    },[])

    console.log(products)

   
    


    
    
   
  return (
    <div>
        <div className='flex justify-between items-center my-5'>
            <div>
                <h2 className='text-xl font-bold'>Cart</h2>
            </div>
            <div className='flex gap-4 items-center'>
                <h2 className='text-lg font-bold'>Total Cost: 1000</h2>
                <button className='btn bg-transparent border-purple-700 text-purple-700 px-8 rounded-3xl'>Sort By Price</button>
                <button className='btn bg-purple-700 text-white px-8 rounded-3xl'>Purchase</button>
            </div>
        </div>
        {
            products.map((product=><CartAndWishListCard key={product.id}  product={product}></CartAndWishListCard>))
        }
    </div>
  )
}

export default Cart
