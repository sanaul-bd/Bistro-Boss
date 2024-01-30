import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/Section_Title/SectionTitle";
import useMenu from "../../../Hooks/UseMenuHook";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    // console.log('log from Manage item ', menu);

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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('Deleted res ', res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Items has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    }




    return (
        <div className="w-full">
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up"></SectionTitle>
            {/* table */}
            <div className="overflow-x-auto">
                <div>
                    <p className="text-end me-20 font-semibold">Total Items : {menu?.length}</p>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <p>Serial</p>
                            </th>
                            <th>Item Name </th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{item.category}</span>
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    {/* <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md"><FaTrash /></button> */}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  text-red-600 btn-md"><FaTrash /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;