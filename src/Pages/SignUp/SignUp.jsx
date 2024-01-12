
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';  
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';




const SignUp = () => {

    // import Creat User from AuthProvider 
    const { creatuserWithEmail, updateUserProfileMethod } = useContext(AuthContext)
    const navigate = useNavigate()


    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const onSubmit = (event) => {
    //     event.preventDefault()
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;


    //     console.log(email, password);
    //     // console.log(data)
    //     creatuserWithEmail(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             form.reset()
    //             console.log(loggedUser);
    //             alert("user Created");
    //         })

    //         .catch(err => console.error(err))
    // }



    const onSubmit = (data) => {
        const { name, email, photoURL, password } = data;
        // console.log(name, email, photoURL, password)
        // console.log(data)

        creatuserWithEmail(email, password)
            .then(result => {

                const loggedUser = result.user;
                console.log("Sign up.jsx", loggedUser);

                // update methods
                updateUserProfileMethod(name, photoURL)
                    .then(() => {

                        // after sign up || update user successfully we store user info  thats why we creat a fetch request heare 
                        const savedUser = { name: data.name, email: data.email, photoURL: data.photoURL, password: data.password }
                        fetch(`http://localhost:5000/users`, {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log("Inserted ", data);
                                    reset()
                                    // console.log("User Profile Updated")
                                    Swal.fire({
                                        title: "User Profile Updated",
                                        showClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster `
                                        },
                                        hideClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster `
                                        }
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(err => console.error(err))
            })
    }

    return (
        <>
            {/* React Dynamic Helmet */}
            <Helmet> <title>Bistro Boss || Sign Up</title> </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUP Heare!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* NAME */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-700 text-center pt-1'>Name is required</span>}
                            </div>
                            {/* EMAIL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email")} placeholder="Email" className="input input-bordered" />
                            </div>
                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="name" {...register("photoURL", { required: true })} placeholder="Put Photo url Heare" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-700 text-center pt-1'> Photo url required</span>}
                            </div>
                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered" required />
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-700 text-center pt-1'>Password must be 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-700 text-center pt-1'>Password must be max 20 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-700 text-center pt-1'>Password Must have One uppercase one lowercase one spicial character</p>
                                )}
                                <label className="label">
                                    <Link to='/login' href="#" className="label-text-alt link link-hover">go to login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value="Sign Up" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;