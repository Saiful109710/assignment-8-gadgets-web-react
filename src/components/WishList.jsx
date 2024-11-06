import React, { useEffect, useState } from 'react'
import { getToLocalStorage, removeFromLocalStorageData } from '../Utility/addToDb';
import CartAndWishListCard from './CartAndWishListCard';

const WishList = () => {
  const [wishlistData,setWishListCards] = useState([]);

  useEffect(()=>{
    const gadgets = getToLocalStorage('wishlist') ;
    setWishListCards(gadgets)
  },[])

  const handleRemoveWishList = (id)=>{
        removeFromLocalStorageData('wishlist',id);
        const gadgets = getToLocalStorage('wishlist') ;
        setWishListCards(gadgets)
  }
  return (
    <div className='my-5'>
       <div>
          <h2 className='text-lg font-bold'>Wish List</h2>
       </div>
       <div>
          {
            wishlistData.map((gadget)=><CartAndWishListCard key={gadget.id} product={gadget} handleRemoveCart={handleRemoveWishList}></CartAndWishListCard>)
          }
       </div>


    </div>

  )
}

export default WishList
