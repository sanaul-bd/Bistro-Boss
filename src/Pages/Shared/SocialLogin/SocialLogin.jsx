import { useContext } from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    // get google authProvider || popup auth
    const { googleSignIn } = useContext(AuthContext);
    // get navigate & location for privet route
    const navigate = useNavigate()
    const location = useLocation()
    // find from: where from user come and where want go
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);

                // after sign up || update user successfully we store user info  thats why we creat a fetch request heare 
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch(`https://server-bistro-boss-ten.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }


    return (
        <div className="pb-4 px-5">
            <div className="divider">Socile Login</div>

            <div className="flex justify-evenly">
                {/* google */}
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle />
                </button>
                {/* facebook */}
                <button className="btn btn-circle">
                    <FaFacebook />
                </button>
                {/* twitter */}
                <button className="btn btn-circle">
                    <FaTwitter />
                </button>
                {/* insta */}
                <button className="btn btn-circle">
                    <FaInstagram />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;