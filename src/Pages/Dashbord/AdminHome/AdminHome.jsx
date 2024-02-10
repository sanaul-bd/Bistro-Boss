import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";


const AdminHome = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    console.log("axiso fetch data", stats);  //menuItems, orders, revenue, users
    // console.log("user", user.displayName);


    return (
        <div className="w-full px-10">
            <div className="ms-6">
                <span>Hi, Welcome back  </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }
            </div>
            {/* table format  */}
            <div className="stats shadow w-full gap-4">

                {/* 1 */}
                <div className="stat bg-slate-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <IoWalletOutline className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                {/* 2 */}
                <div className="stat bg-orange-200 rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <IoIosPeople className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Users Count</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                {/* 3 */}
                <div className="stat bg-lime-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title font-semibold">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                {/* 4 */}
                <div className="stat bg-cyan-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                    <MdOutlineLocalShipping className="text-3xl"/>
                    </div>
                    <div className="stat-title font-semibold">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;