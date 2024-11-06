import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import AllGadgetsData from "../components/AllGadgetsData";
import AllGadgetsCard from "../pages/AllGadgetsCard";
import GadgetDetails from "../pages/GadgetDetails";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/dashBoard";
import Cart from "../components/cart";
import WishList from "../components/WishList";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../categories.json'),
                children:[
                    {
                        path:'/',
                        element:<AllGadgetsData></AllGadgetsData>,
                        loader:()=>fetch('../allGadgets.json')
                    },
                    {
                        path:'/categories/:category',
                        element:<AllGadgetsData></AllGadgetsData>,
                        loader:()=>fetch('../allGadgets.json')
                    }
                ]

            },
            {
                path:'/allGadgets',
                element:<AllGadgetsCard></AllGadgetsCard>,
                loader:()=>fetch('../allGadgets.json')
            },
            {
                path:'/gadgets/:id',
                element:<GadgetDetails></GadgetDetails>,
                loader:()=>fetch('../allGadgets.json'),
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>,
                children:[
                    {
                        path:'cart',
                        element:<Cart></Cart>
                    },
                    {
                        path:'wishlist',
                        element:<WishList></WishList>

                    }
                ]
            }
        ]
    },
    
  
])

export {router}
