import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {

    // বাপ রে। এইটা একটু সময় লাগছে ভালোই। সমস্যা দেখলেই ডকুমেন্টস দেখে ফিক্স করে নাও ।
    // 1. get axiosSecure bby useAxiosSecure() 
    // 2. call: axiosSecure.get(``)
    // 3. cut base url
    // 4. 
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log("All User Heare =======> ", res.data);
            return res.data;
        }
    })




    // handleDelete || user delete function
    const handleDelete = () => {
        // console.log('clicked user ', user);
    }

    // 
    const handleMakeAdmin = (user) => {
        // console.log("clicked id", user._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to add him Admin?",
            // icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes! Add Him"
        }).then((result) => {
            if (result.isConfirmed) {
                // 
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: "PATCH"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("users data ", data);
                        if (data.modifiedCount) {
                            refetch()  // refatch for recall and re arranged info.
                            Swal.fire({
                                title: "Success!",
                                text: "Admin Make Successfully",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="w-full px-4">
            <Helmet><title>Bistro Boss || All Users</title></Helmet>
            <h3 className="text-3xl font-semibold my-6 text-center">Total Users : {users.length}</h3>

            {/*  table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr
                                    key={user._id} >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role == "admin" ? "admin" :
                                            <button onClick={() => handleMakeAdmin(user)} className="ms-3"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td><button onClick={() => handleDelete(user)} className="ms-3"><FaTrash></FaTrash></button></td>
                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;