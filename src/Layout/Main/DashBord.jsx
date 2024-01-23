import { FaBook, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { AiOutlineContainer } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";




const DashBord = () => {

    // TODO: load data from server then make who admin or not then send synamic menu 
    // const isAdmin = true;
    // const isAdmin = false;
    
    const [isAdmin] = useAdmin()
    // console.log("Admin or not ======= > ", isAdmin);

    // import cart menu items
    const [cart] = useCart()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}


                <Outlet></Outlet>


                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content  bg-[#d1a054]">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <div>
                                <li><NavLink to='/dashbord/adminHome'><FaHome /> ADMIN HOME  (__Admin__)</NavLink></li>
                                <li><NavLink to='/dashbord/addItem'><FaUtensils></FaUtensils> ADD AN ITEMS</NavLink></li>
                                <li><NavLink to='/dashbord/managedItems'> <FaWallet></FaWallet> MANAGED ITEMS</NavLink></li>
                                <li><NavLink to='/dashbord/managedBooking'><FaBook></FaBook> MANAGED BOOKINGS</NavLink></li>
                                <li><NavLink to='/dashbord/allUsers'><FaUsers></FaUsers> ALL USERS </NavLink></li>
                                {/* <li>
                                    <NavLink to='/dashbord/mycart'>
                                        <FaShoppingCart /> MY CART
                                        <span className="badge">+{cart?.length || 0}</span>
                                    </NavLink>
                                </li> */}
                            </div>
                            :
                            <div>
                                <li><NavLink to='/dashbord/home'><FaHome /> HOME</NavLink></li>
                                <li><NavLink to='/dashbord/revisition'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                                <li><NavLink to='/dashbord/payment'><FaWallet></FaWallet> PAYMENT HISTRY</NavLink></li>
                                <li>
                                    <NavLink to='/dashbord/mycart'>
                                        <FaShoppingCart /> MY CART
                                        <span className="badge">+{cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li><NavLink to='/dashbord/review'><MdOutlinePlaylistAdd /> ADD REVIEW</NavLink></li>
                                <li><NavLink to='/dashbord/booking'><AiOutlineContainer /> MY BOOKING</NavLink></li>
                            </div>
                    }
                    {/* ------------ */}
                    <div className="divider my-2"></div>
                    <li><NavLink to='/'><FaHome></FaHome> HOME</NavLink></li>
                    <li><NavLink to='/dashbord/menu'><CiMenuFries /> MENU</NavLink></li>
                    <li><NavLink to='/dashbord/shop'><FaShoppingBag /> SHOP</NavLink></li>
                    <li><NavLink to='/dashbord/contatc'><MdOutlineMailOutline /> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBord;