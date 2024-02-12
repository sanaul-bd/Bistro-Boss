import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineFastfood, MdOutlineLocalShipping } from "react-icons/md";

// import for chart 
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
const rechartcolors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const PICOLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminHome = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // if object then defult value {}, if arra [], if number = 0, if string = '';
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    console.log("res stats : ", stats);  //menuItems, orders, revenue, users
    // console.log("user", user.displayName);

    const { data: chartData = [] } = useQuery({
        queryKey: 'order-stats',
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data
        }
    })
    console.log("res chartData: ", chartData);




    // * custoom function for rechart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // * function for pichart 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pichartdata = chartData.map(data => {
        return { name: data.category, value: data.revinue }
    })



    return (
        <div className="w-full px-10">
            <div className="ms-2 mb-6">
                <span>Hi... Welcome back  </span>
                <span className="font-semibold text-emerald-700 bg-slate-200 py-1 px-2 rounded-xl">
                    {
                        user?.displayName ? user.displayName : "Back"
                    }
                </span>
            </div>
            {/* table format  */}
            <div className="stats shadow w-full gap-4 p-2">

                {/* 1 Revenue */}
                <div className="stat bg-slate-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <IoWalletOutline className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Revenue</div>
                    <div className="stat-value">${stats?.revenue?.toFixed(2)}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                {/* 2 Users Count */}
                <div className="stat bg-orange-200 rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <IoIosPeople className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Users Count</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                {/* 3 Menu Items */}
                <div className="stat bg-lime-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <MdOutlineFastfood className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                {/* 4 Orders */}
                <div className="stat bg-cyan-200  rounded-2xl">
                    <div className="stat-figure text-secondary">
                        <MdOutlineLocalShipping className="text-3xl" />
                    </div>
                    <div className="stat-title font-semibold">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

            {/* chart main div */}
            <div className="flex my-4">
                {/* chart 1 : bar chart */}
                <div className="w-1/2 py -2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={rechartcolors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* chart - 2 : pai chart */}
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pichartdata}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pichartdata.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PICOLORS[index % PICOLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;