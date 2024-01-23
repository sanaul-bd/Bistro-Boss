import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {

    // user exist or not 
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    // wjile loading that time load spinnig. after load data  spinning will be stop and data will be print. 
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    // apply conditon
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;