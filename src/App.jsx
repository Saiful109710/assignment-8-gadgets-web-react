import { Outlet, useLoaderData, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import BannerCard from "./components/BannerCard"

import { createContext, useEffect, useState } from "react"


export const PathContext = createContext(null)
export const DashBoardContext = createContext(null);




function App() {
  const {pathname} = useLocation()
  const [pathName,setPathName] = useState(null)
  const [products,setProduct] = useState([])
  
  
useEffect(()=>{
    const storedPathName = localStorage.getItem('pathName');
    if(storedPathName ){
      setPathName(storedPathName)
    }
},[])

useEffect(()=>{
    if(pathName){
      localStorage.setItem('pathName',pathName)
    }
},[pathName])
 

 

  return (
 <DashBoardContext.Provider value={[products,setProduct]}>
     <PathContext.Provider value={[pathName,setPathName]}>
        <div className='flex flex-col'>
         {/* NAvbar */}
        <div className={`${ (pathname==='/' || pathname===`/categories/${pathName}`)?'bg-[#9538E2]':'bg-white'}`}>
            <Navbar></Navbar>
            {
              (pathname==='/' || pathname===`/categories/${pathName}`)&&<Banner></Banner>
            }
        </div>
        {
          (pathname==='/' || pathname===`/categories/${pathName}`) && <BannerCard></BannerCard>
        }
      {/* Children */}
      <div className="min-h-[calc(100vh-292px)] container mx-auto my-5">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
     
      
    </div>
  </PathContext.Provider>
 </DashBoardContext.Provider>
  )
}

export default App
