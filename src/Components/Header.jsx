import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout successful')
            })
        .catch(error => toast.error(error.message))
        
    }

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link to="/biodatas" className="mr-5 hover:text-gray-900">BioDatas</Link>
                        <Link to="/aboutUs" className="mr-5 hover:text-gray-900">About Us</Link>
                        <Link to="/contactUs" className="mr-5 hover:text-gray-900">Contact Us</Link>
                        {
                            user ? <>
                                <span onClick={handleLogout} className="hover:text-gray-900">Logout</span>
                            </> : 
                                <Link to="/login" className="hover:text-gray-900">Login</Link>
                        }
                    </nav>
                    <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img src="https://i.ibb.co/RCGswgG/icons8-love-30.png" alt="" />
                        <span className="ml-3 text-xl">MatriMony</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link to="/dashboard">
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;