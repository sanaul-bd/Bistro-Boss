import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider";


// use auth in single line || useAuth hook
const useAuth = () => {
    const auth = useContext(AuthContext);
    // console.log('AuTh---------------------', auth);
    return auth;
}

export default useAuth;