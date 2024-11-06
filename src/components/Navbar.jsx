import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { getToLocalStorage } from "../Utility/addToDb";



const Navbar = () => {
  const {pathname} = useLocation();
  const [cart,setCart] = useState([])
  const [wishlist,setWishlist] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [wishlistCount,setWishlistCount] = useState(0)


  useEffect(()=>{
        setCart(getToLocalStorage('cart'));
        setWishlist(getToLocalStorage('wishlist'));

        
  },[])

  useEffect(()=>{
      setCartCount(cart.length);
      setWishlistCount(wishlist.length)
  },[cart,wishlist])

  console.log(cartCount,wishlistCount)

  

  
  
  return (
    <div className={`navbar ${pathname==='/'?'text-white':''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
                       <NavLink onClick={()=>document.title='Gadget - Home'} to='/' className={({isActive})=>`font-bold ${isActive?'text-purple-200':''}`}>Home</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Statistics'} to='/statistics' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Statisics</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Dashboard'} to='/dashboard' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Dashboard</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Contact'} to='/Contact' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Contact</NavLink>
          </ul>
        </div>
        <NavLink to={'/'} className={({isActive})=>`btn btn-ghost text-xl ${isActive?'':'text-purple-700'}`}>Gadget Heaven</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
           <NavLink onClick={()=>document.title='Gadget - Home'} to='/' className={({isActive})=>`font-bold ${isActive?'text-purple-200':''}`}>Home</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Statistics'} to='/statistics' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Statisics</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Dashboard'} to='/dashboard' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Dashboard</NavLink>
            <NavLink onClick={()=>document.title='Gadget - Contact'} to='/Contact' className={({isActive})=>`font-bold ${isActive?'text-purple-700':''}`}>Contact</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
          <NavLink to='/dashboard/cart' className={'relative'}><button className="btn rounded-full "><IoCartOutline></IoCartOutline></button>
          <span className="absolute right-0 top-0 p-1 bg-purple-700 text-white rounded-full text-[10px] font-bold">{cartCount}</span></NavLink>
          <NavLink to='/dashboard/wishlist' className={'relative'}><button className="btn rounded-full "><FaRegHeart></FaRegHeart></button>
          <span className="absolute right-0 top-0 p-1 bg-purple-700 text-white rounded-full text-[10px] font-bold">{wishlistCount}</span></NavLink>

      </div>
    </div>
  );
};

export default Navbar;
