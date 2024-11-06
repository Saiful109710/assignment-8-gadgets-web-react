import React from "react";
import bannerImg from '../assets/banner.jpg'
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className=" container mx-auto">
         <div className="hero  pt-10 pb-28 sm:pb-40 md:pb-52 rounded-xl">
            <div className="hero-content text-center">
                <div className="md:max-w-[70%]">
                <h1 className=" text-3xl md:text-5xl font-bold text-white">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the
                    next level. From smart devices to the coolest accessories, we have
                    it all!
                </p>
                <button onClick={()=>navigate('/dashboard')} className="btn bg-white text-[#9538E2] rounded-xl">Shop Now</button>
                </div>
            </div>
            </div>
           
    </div>
  );
};

export default Banner;
