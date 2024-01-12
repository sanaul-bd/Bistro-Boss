

import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {

    // we get user by AuthContext.
    // we import tanstuck function. apply conditon on function if(user){then do somthing.}
    // we replace function by async() => {fetch`Dynamicly`}
    // 
    // 
    const { user , loading  } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    // if data need by filter || specific data use "queryKey"
    const { refetch, data: cart = [] } = useQuery({

        //^ this is existing function only fetch 
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // },


        //  this is new function by using axios 
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            // console.log("res from axios", res);
            return res.data;
        },
    })
    return [cart, refetch]


}

export default useCart;

// tenstack quary  : Query একদম হুবুহু হইতে হবে ।
// http://localhost:5000/carts?email=sanaullah.bd21@gmail.com  || not Work
// http://localhost:5000/carts?email=sanaullah.bd21@gmail.com  || work