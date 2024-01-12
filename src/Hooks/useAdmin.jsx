import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    console.log("user Name... ", user.displayName, "& Email... ", user.email);
    const [axiosSecure] = useAxiosSecure();

    // axios fetch: 
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('isAdmin', res.data.admin);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
}

export default useAdmin;