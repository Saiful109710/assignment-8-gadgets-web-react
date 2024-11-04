import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories)
  return (
    <div className='border shadow-xl px-8 py-5 flex flex-col gap-5'>
        
             <NavLink to='/' className={({isActive})=>`p-2  rounded-2xl text-center ${isActive?'bg-purple-700 text-white':'bg-gray-200'}`}>All Products</NavLink>
            {
                categories.map((category)=><NavLink  to={`/categories/${category.category}`} key={category.id} className={({isActive})=>`p-2  rounded-2xl text-center ${isActive?'bg-purple-700 text-white':'bg-gray-200'}`}>{category.category}</NavLink>)
            } 
        


    </div>
  )
}

export default Categories
