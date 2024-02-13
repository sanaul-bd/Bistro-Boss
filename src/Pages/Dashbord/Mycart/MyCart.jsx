import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




const MyCart = () => {
    // get cart items by useCart hooks
    const [cart , refetch] = useCart()
    // adding by reduce 
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    // delete function
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-bistro-boss-ten.vercel.app/carts/${item._id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // এখানে আগে এরে থেকে ফিল্টার মেরে দেখতাম কোন আইডি টা ডিলেট হইছে তারপর বাকি সব গুলারে আবার নতুন করে এরে তে ঢুকায়ে দেখাইতা, tanstuck ব্যাবহারের ফলে এইটা একদম ইজি। শুধু refatch() করলেই হয় । 
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Items has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="w-full">

            <Helmet><title>Bistro Boss || My  Cart</title></Helmet>
            {/* fisrt section */}
            <div className="uppercase font-semibold flex justify-between px-4 py-4 text-white bg-slate-500 items-center">
                <h2>Total Product : {cart.length}</h2>
                <h2>Total Price : $ {total}</h2>
                <Link to='/dashbord/payment' className="btn btn-warning btn-sm text-white" disabled={!cart.length}>Pay</Link>
            </div>
            {/* second section || Table section */}
            <div className="overflow-x-auto bg-slate-200 py-4 px-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Food</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold"> {item.name}</div>
                                        </div>
                                    </td>
                                    <td className="">
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md"><FaTrash /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;