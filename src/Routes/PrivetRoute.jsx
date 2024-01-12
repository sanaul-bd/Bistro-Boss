import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {

    // user exist or not 
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    // wjile loading that time load spinnig. after load data  spinning will be stop and data will be print. 
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    // apply conditon
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;