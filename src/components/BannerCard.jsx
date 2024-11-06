import React from 'react'
import bannerImg from '../assets/banner.jpg'

const BannerCard = () => {
  return (
    <div className="w-[70%] mx-auto h-[500px] p-4 border-4 rounded-2xl backdrop-blur-xl border-white relative -translate-y-[30%] z-30">
    <   img className="w-full h-full object-cover rounded-2xl" src={bannerImg} alt="" />
    </div>
  )
}

export default BannerCard
