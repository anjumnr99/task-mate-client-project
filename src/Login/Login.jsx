import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa6";

import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const { googleLogin, loginWithEmailAndPassword, gitHubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    //   const axiosPublic = useAxiosPublic();
    const handleGitHubLogin = () =>{
        gitHubLogin()
        .then(result => {
            console.log(result);

            // const userInfo = {
            //   email: result.user?.email,
            //   name: result.user?.displayName,
            //   image: result.user?.photoURL
            // }

            // axiosPublic.post('/users', userInfo)
            //   .then(res => {
            //     console.log(res.data);
            //     navigate('/')
            //   })

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: 'Logged Successfully!'
            });
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            // toast.error(err.message)
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: err.message
            });

        })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);

                // const userInfo = {
                //   email: result.user?.email,
                //   name: result.user?.displayName,
                //   image: result.user?.photoURL
                // }

                // axiosPublic.post('/users', userInfo)
                //   .then(res => {
                //     console.log(res.data);
                //     navigate('/')
                //   })

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: 'Logged Successfully!'
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                // toast.error(err.message)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: err.message
                });

            })

    };
    const handleLoginWithEmailAndPassword = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        loginWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                // toast.success('Logged Successfully!')
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                // toast.error(err.message)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: err.message
                });
                console.log(err);
            })


    }
    return (
        <div className=" max-w-4xl mx-auto min-h-[70vh] px-3 my-5 pb-20   flex flex-col  justify-center items-center ">


            <div className="w-full bg-blue-100 max-w-md p-4 my-10 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl text-blue-700 font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-blue-600 dark:text-gray-400">Dont have account?
                    <Link to='/register' className="focus:underline font-semibold text-blue-900 hover:underline"> Sign up here</Link>
                </p>
                <div className="flex items-center w-full">
                    <hr className="w-full border-blue-700  dark:text-gray-400" />
                    <p className="flex-shrink-0 px-2 text-blue-800 font-semibold dark:text-gray-400">Login with</p>
                    <hr className="w-full border-blue-700 dark:text-gray-400" />
                </div>
                <div className=" flex items-center justify-center w-full p-4 space-x-4 -mt-3  border-blue-700 border-l border-r border-b  focus:ri focus:ri dark:border-gray-400 focus:ri">
                    <button onClick={handleGoogleLogin} type="button" className=" ">
                        <FcGoogle className="text-3xl "></FcGoogle>

                    </button>
                    <button onClick={handleGitHubLogin} type="button" className=" ">
                        <FaGithub className="text-3xl " />

                    </button>

                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full border-blue-800  dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full border-blue-800 dark:text-gray-400" />
                </div>
                <form onSubmit={handleLoginWithEmailAndPassword} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="wxyz199@example.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-700  focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" required className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md border border-blue-800 hover:border-blue-500 text-blue-600 dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                </form>
            </div>


        </div>
    );
};

export default Login;