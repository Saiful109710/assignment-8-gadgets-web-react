import React from 'react'
import { removeFromLocalStorageData, setToLocalStorage } from '../Utility/addToDb'
import { useLocation } from 'react-router-dom'

const CartAndWishListCard = ({product,handleRemoveCart}) => {
    const {pathname} = useLocation();
    
    const {id,product_image,product_title,price,description} = product
  return (
    <div className='flex p-5 shadow-xl rounded-2xl border gap-4 justify-between items-center'>
        <div className='flex  gap-4 '>
        <div className='p-2'>
            <img className='w-[100px] h-[100px]' src={product_image} alt="" />
        </div>
        <div className='space-y-3'>
            <h2 className='text-lg font-bold'>{product_title}</h2>
            <p className='text-gray-500'>{description}</p>
            <p className='font-semibold'>price:{price}</p>
            {pathname==='/dashboard/wishlist'&& <button onClick={()=>{setToLocalStorage('cart',product);handleRemoveCart(id)}} className='btn bg-purple-700 text-white px-8 rounded-2xl '>Add to Cart</button>}
        </div>
        </div>
        <div>
            <button onClick={()=>handleRemoveCart(id)} className='btn btn-warning'>Delete</button>
        </div>
    </div>
  )
}

export default CartAndWishListCard
