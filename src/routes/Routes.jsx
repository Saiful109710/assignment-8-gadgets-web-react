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
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../categories.json'),
                meta: { title: 'Home ' },
                children:[
                    {
                        path:'/',
                        element:<AllGadgetsData></AllGadgetsData>,
                        loader:()=>fetch('../allGadgets.json'),
                        meta: { title: 'Home' },
                    },
                    {
                        path:'/categories/:category',
                        element:<AllGadgetsData></AllGadgetsData>,
                        loader:()=>fetch('../allGadgets.json'),
                        meta: { title: `` },
                    }
                ]

            },
            {
                path:'/allGadgets',
                element:<AllGadgetsCard></AllGadgetsCard>,
                loader:()=>fetch('../allGadgets.json'),
                meta: { title: 'All Gadget' },
            },
            {
                path:'/gadgets/:id',
                element:<GadgetDetails></GadgetDetails>,
                loader:()=>fetch('../allGadgets.json'),
                meta: { title: 'Gadget' },
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                meta: { title: 'Statistics' },
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
            },
            {
                path:'/contact',
                element:<ContactPage></ContactPage>,
                meta: { title: 'Contact Page' },
            }
        ]
    },
    
  
])

export {router}
