import React, { useContext, useEffect, useState } from 'react'
import { DashBoardContext } from '../App'
import CartAndWishListCard from './CartAndWishListCard';
import { getToLocalStorage, removeFromLocalStorageData, setToLocalStorage } from '../Utility/addToDb';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate()
    const [products,setProducts] = useState([]);
    const [sortStatus,setSortStatus] = useState(true);
    const [totalPrice,setTotalPrice] = useState(0);
    const [isModalOpen,setModalOpen] = useState(false)
   

    useEffect(()=>{
        const storedCartData = getToLocalStorage('cart');
        setProducts(storedCartData)
    },[])

    useEffect(()=>{
       const price =  products.reduce((acc,product)=>acc+product.price,0);
       setTotalPrice(price)
      
       },[products])

  


    const handleRemoveCart = (id)=>{
            removeFromLocalStorageData('cart',id);
            const storedData = getToLocalStorage('cart');
            setProducts(storedData)
            
    }
    const handleSort = (products)=>{
        setSortStatus(!sortStatus);
        if(sortStatus){
            const sortedProducts = [...products].sort((a,b)=>b.price-a.price)
            setProducts(sortedProducts)
        }else{
            const sortedProducts = [...products].sort((a,b)=>a.price-b.price)
            setProducts(sortedProducts)
        }
       
    }

    const handlePurchase=(totalPrice)=>{
            setModalOpen(true)
            setTotalPrice(0);
            setProducts([]);
            localStorage.removeItem('cart')
    }

   
    


    
    
   
  return (
    <div>
        <div className='flex justify-between items-center my-5'>
            <div>
                <h2 className='text-xl font-bold'>Cart</h2>
            </div>
            <div className='flex gap-4 items-center'>
                <h2 className='text-lg font-bold'>Total Cost: {totalPrice}</h2>
                <button onClick={()=>handleSort(products)} className='btn bg-transparent border-purple-700 text-purple-700 px-8 rounded-3xl'>Sort By Price</button>
                <button disabled={totalPrice===0} className='btn bg-purple-700 text-white px-8 rounded-3xl' onClick={()=>handlePurchase(totalPrice)}>Purchase</button>
                {
                    isModalOpen && (
                        <dialog open id="my_modal_1" className="modal  duration-1000" >
                        <div className="modal-box flex flex-col items-center border-2 p-5">
                            <img className='w-[100px]' src="https://img.icons8.com/?size=100&id=AefXIkx4A693&format=png&color=000000" alt="" />
                            <h3 className="font-bold text-lg">Payment Successfully</h3>
                            <div className="divider px-10"></div>
                            <p className="py-4 font-semibold text-gray-600">Thanks for Purchasing</p>
                            <p>Total Price:{totalPrice}$</p>
                            <div className="modal-action justify-center">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={()=>{setModalOpen(false);navigate('/') }}>Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    )
                }
            </div>
        </div>
        <div className='space-y-3'>
        {
            products.map((product=><CartAndWishListCard key={product.id}  product={product} handleRemoveCart={handleRemoveCart}></CartAndWishListCard>))
        }
        </div>
    </div>
  )
}

export default Cart
