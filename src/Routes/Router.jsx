import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBord from "../Layout/Main/DashBord";
import MyCart from "../Pages/Dashbord/Mycart/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers/allUsers";
import AddItem from "../Pages/Dashbord/AddItem/Additem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Layout/Main/ManageItems/ManageItems";
import Payment from "../Pages/Dashbord/AddItem/Payment/Payment";

export const router = createBrowserRouter([
    // main path || client Customar components Heare
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivetRoute><Secret></Secret></PrivetRoute>
            }
        ]
    },
    // All Editor, Manage,  components Heare
    {
        path: 'dashbord',
        element: <PrivetRoute><DashBord></DashBord></PrivetRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            // Admin Routes
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            
        ]
    }
]);