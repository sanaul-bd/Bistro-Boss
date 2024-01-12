
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    // get navigate & location for privet route
    const navigate = useNavigate()
    const location = useLocation()
    // find from: where from user come and where want go
    const from = location.state?.from?.pathname || '/'

    // captcah ref used for useref
    // const captchaRef = useRef(null)
    // login effect 
    const [loginDisable, setLoginDisable] = useState(true)

    const { logIn } = useContext(AuthContext);

    // useEffect for Captcha 
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // collect form data by using form control
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const captcha = form.captcha.value;

        console.log("Login.jsx ", email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("Login.jsx :: ", "Logged in ", user);
                form.reset()

                Swal.fire({
                    title: "Login Successfull",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster`
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster`
                    }
                });
                navigate(from, { replace: true })
            })
    }



    // handle captcha
    const handleValidateCaptcha = (e) => {
        // const user_captcha_value = captchaRef.current.value;
        const user_captcha_value = e.target.value;
        // console.log(captchValue );
        if (validateCaptcha(user_captcha_value)) {
            setLoginDisable(false)
        } else {
            if (user_captcha_value === '') {
                alert('Enter Captcha ');
            } else {
                alert('Captcha Does Not Match');
                // document.getElementById("captchaID").value = ''
            }

        }
    }




    return (
        <>
            <Helmet> <title>Bistro Boss || Log In</title> </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body p-4">
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className=' [label] text-center'>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/*  Captcha  */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} id='captchaID' type="text" name="captcha" placeholder="Type the Captcha Above" className="input input-bordered" />
                                {/* <button className='btn btn-outline btn-xs mt-3'>Validate </button> */}
                            </div>
                            {/* <button className="btn btn-primary">Login</button> */}
                            {/* TODO: make button disable true after production is done  */}
                            <input disabled={false} className="btn btn-primary" type="submit" id="" value="Log In" />
                        </form>
                            <p className='text-center'><small>New Heare? <Link to='/signup'>Create an New Account. </Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;