import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {

    const { createUser, GoogleSignIn } = useContext(AuthContext);
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
   

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                location?.state ? location.state : navigate('/')
                toast.success('Registration successful')
            })
            .catch(error => toast.error(error.message))


    }
    return (
        <>
            <Helmet>
                <title>Register | MatriMony</title>
            </Helmet>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center min-h-screen">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Join thousands of successful couples who found love through us.</h1>
                        <p className="leading-relaxed mt-4">Experience the joy of meaningful connections within our vibrant community. Join us now and let your journey to love and happiness unfold.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <form action="" onSubmit={handleRegister}>
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Photo URL</label>
                                <input type="text" name="url" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Register</button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">Already Have An Account? <Link to="/login"><span className='text-blue-700'>Login</span></Link></p>
                        <hr className='mt-5' />
                       
                            <button onClick={handleSocialSignin} className="text-black bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Google</button>
                        
                    </div>
                </div>
            </section>
            

        </>
    );
};

export default Register;