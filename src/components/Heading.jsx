import React from 'react'
import { useLocation } from 'react-router-dom'

const Heading = ({title,subtitle,id}) => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div className='space-y-3'>
        <h1 className={`text-3xl font-bold text-center ${pathname==='/'?'':'text-white'}`}>{title}</h1>
        <p className={`text-center w-3/4 md:w-2/4 mx-auto ${pathname==='/'?'':'text-white'}`}>{subtitle}</p>
    </div>
  )
}

export default Heading
