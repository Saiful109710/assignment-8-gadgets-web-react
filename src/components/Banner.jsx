import React from "react";
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div className=" container mx-auto">
         <div className="hero  pt-10 pb-52 rounded-xl">
            <div className="hero-content text-center">
                <div className="max-w-[70%]">
                <h1 className="text-5xl font-bold text-white">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the
                    next level. From smart devices to the coolest accessories, we have
                    it all!
                </p>
                <button className="btn bg-white text-[#9538E2] rounded-xl">Get Started</button>
                </div>
            </div>
            </div>
           
    </div>
  );
};

export default Banner;
