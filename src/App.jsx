import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



function App() {
 

  return (
    <div className='flex flex-col'>
      {/* NAvbar */}
      <Navbar></Navbar>
      {/* Children */}
      <div className="min-h-[calc(100vh-292px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
      
    </div>
  )
}

export default App
