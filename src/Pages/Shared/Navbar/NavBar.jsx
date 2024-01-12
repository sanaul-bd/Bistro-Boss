import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";


const NavBar = () => {
    const navigate = useNavigate()
    // get user from useContex
    const { user, logOut } = useContext(AuthContext)

    // get cart from cartHooks by using tanstuck || reactQuery
    const [cart] = useCart()

    // log Out Concept 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logOut success");
                    navigate('/login')
                    Swal.fire('LogOut Success')
            })
            .catch(error => console.log(error))
    }



    // Creat a manual navBar Options
    const navOptions =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Our Menu</Link></li>
            <li><Link to='/order/Salad'>Order Food</Link></li>
            <li><Link to='/secret'>Secret</Link></li>
            {
                user ?
                    <>
                        <span className="mt-2">{user?.displayName}</span>
                        <li><Link onClick={handleLogOut} >log out</Link></li>
                    </>
                    :
                    <>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Log in</Link></li>
                    </>
            }
        </>




    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 text-white bg-gray-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Heare DropDown Section */}
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><Link to='/'>Bistro Boss</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Heare all menu  */}
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='dashbord/mycart'>
                        <button className="btn">
                            <FaShoppingCart />
                            <div className="badge">+{cart?.length || 0}</div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;