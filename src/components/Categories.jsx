import React, { useContext } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { PathContext } from '../App';

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories)
    const [pathName,setPathName] = useContext(PathContext)
  return (
    <div className='border shadow-xl px-8 py-5 flex flex-col gap-5'>
        
             <NavLink to='/' className={({isActive})=>`p-2  rounded-2xl text-center ${isActive?'bg-purple-700 text-white':'bg-gray-200'}`}>All Products</NavLink>
            {
                categories.map((category)=><NavLink onClick={()=>{setPathName(category.category.split(' ').join(''));document.title=`Gadget - ${category.category}`}}  to={`/categories/${category.category.split(' ').join('')}`} key={category.id} className={({isActive})=>`p-2 hover:bg-purple-700 hover:text-white  rounded-2xl text-center ${isActive?'bg-purple-700 text-white':'bg-gray-200'}`}>{category.category}</NavLink>)
            } 
        


    </div>
  )
}

export default Categories
