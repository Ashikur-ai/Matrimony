import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {

    const { signIn, GoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSocialSignin = () => {
        return GoogleSignIn()
            .then(result => {
                console.log(result.user);
                {
                    location?.state ? location.state : navigate('/')
                    toast.success('Logged in successful');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                location?.state ? location.state : navigate('/')
                toast.success('Login successful')
            })
            .catch(error => toast.error(error.message))

    }

    return (
        <>
            <Helmet>
                <title>Login | MatriMony</title>
            </Helmet>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center min-h-screen">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Enjoy privacy and security while interacting with potential matches.</h1>
                        <p className="leading-relaxed mt-4">Our platform offers personalized matches based on your preferences. Find someone who shares your values and dreams with just a few clicks.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
                        <form action="" onSubmit={handleLogin}>
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="email" id="full-name" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
                        </form>

                        <p className="text-xs text-gray-500 mt-3">Don't Have an Account? <Link to="/register"><span className='text-blue-600'>Register</span></Link></p>
                        <hr className='mt-5' />
                        <button onClick={handleSocialSignin} className="text-black bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Google</button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Login;