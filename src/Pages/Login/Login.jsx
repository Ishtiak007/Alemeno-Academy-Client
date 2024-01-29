
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false)
    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Olden Goods | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-gradient-to-r from-cyan-50 to-blue-50">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <div className="lg:mr-12 lg:w-1/2">
                        <img className="rounded-lg shadow-2xl border-8  border-sky-300 " src={img} alt="" />
                    </div> */}
                    <div className="card  bg-opacity-75 shadow-2xl w-full">
                        <form onSubmit={handleLogin} className='lg:p-5 p-2'>
                            <div>
                                <p className="py-4 text-center text-xl font-semibold text-white-900">Login Here</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="buttonProject3">Login</button>
                            </div>
                            <div>
                                <hr className="my-4" />
                                <h1 className="text-lg font-bold text-center mt-4">You can also Login With</h1>
                                <div className="space-y-3 my-4">
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>
                            <div>
                                <p className="text-base my-3 text-center">Create an account <Link to='/register' className="text-blue-600 underline">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;