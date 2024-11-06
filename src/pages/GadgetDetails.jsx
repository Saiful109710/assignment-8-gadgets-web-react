import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { DashBoardContext } from "../App";
import { getToLocalStorage, setToLocalStorage } from "../Utility/addToDb";



const GadgetDetails = () => {
 
  
  const allGadgetData = useLoaderData();
  const [gadget, setGadget] = useState({});
  const [isCart,setIsCart] = useState(false)
  const [isWishlist,setIsWishList] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    const singleGadget = allGadgetData.find(
      (gadget) => gadget.id === parseInt(id)
    );
    setGadget(singleGadget);
    const cartGadget = getToLocalStorage('cart');
    const isExist = cartGadget.find((cart)=>cart.id===singleGadget.id);
    if(isExist){
      setIsCart(true)
    }

    const wishlistGadget = getToLocalStorage('wishlist')
    const isExistWishlist = wishlistGadget.find((gadget)=>gadget.id===singleGadget.id)
    if(isExistWishlist){
      setIsWishList(true)
    }
    
  }, [id, allGadgetData]);

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification = [],
    availability,
    rating,
  } = gadget;

  return (
    <div>
      <div className="bg-purple-700 pt-7 pb-48 ">
        <Heading
          id={id}
          title="Product Details"
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
      <div className="flex flex-col md:flex-row max-w-[90%] md:max-w-[70%] mx-auto relative z-30 -translate-y-[15%] md:-translate-y-[35%] p-5 rounded-xl bg-white shadow-lg gap-5">
        <div className="flex items-center justify-center">
          <img className="h-[300px] " src={product_image} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-bold">{product_title}</h2>
          <p className="text-gray-600 font-semibold">Price: ${price}</p>
          {availability ? (
            <button className="btn btn-sm bg-green-100 border-success rounded-2xl text-success">
              In Stock
            </button>
          ) : (
            <button className="btn bg-warning/20 border-warning text-warning btn-sm rounded-2xl">
              Stock Out
            </button>
          )}
          <p className="text-gray-600">{description}</p>

          {Array.isArray(specification) && specification.length > 0 ? (
            <ul className="list-decimal ml-5 ">
              {specification.map((li, idx) => (
                <li className="text-gray-600" key={idx}>
                  {li}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No specifications available.</p>
          )}

          <p className="font-semibold">Ratings</p>
          <div className="flex items-center gap-5">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    i < rating ? "bg-orange-400" : "bg-gray-300"
                  }`}
                  defaultChecked={i + 1 === Math.round(rating)}
                />
              ))}
            </div>
            <div>{rating}</div>
          </div>
          <div className="flex gap-3">
            <button disabled={isCart} onClick={()=>{setToLocalStorage('cart',gadget); getToLocalStorage('gadget');setIsCart(true)}} className="btn bg-purple-700 text-white btn-md rounded-2xl">Add to Cart <IoMdCart/></button>
            <button disabled={isWishlist} onClick={()=>{getToLocalStorage('wishlist'); setToLocalStorage('wishlist',gadget);setIsWishList(true)}} className="rounded-full btn "><FaRegHeart/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
