import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Menu from "../Pages/Menu/Menu";
import Reservation from "../Pages/Reservation/Reservation";
import Order from "../Pages/Order/Order";
import History from "../Pages/History/History";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"/reservation",
            element:<Reservation></Reservation>
        },
        {
            path:"/order",
            element:<Order></Order>
        },
        {
            path:"/history",
            element:<History></History>
        },
    ]
    }
])