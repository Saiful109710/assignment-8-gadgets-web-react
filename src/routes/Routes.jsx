import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import AllGadgetsData from "../components/AllGadgetsData";
import AllGadgetsCard from "../pages/AllGadgetsCard";
import GadgetDetails from "../pages/GadgetDetails";

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
            }
        ]
    },
    
  
])

export {router}
