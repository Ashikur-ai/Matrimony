import React from 'react';
import Header from '../../../Components/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BiodatasPage = () => {
    return (
        <>
            <Helmet>
                <title>All BioData | MatriMony</title>
            </Helmet>
            <Header></Header>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Where dreams meet reality - your soulmate is just a click away.</h1>
                        <p className="mb-8 leading-relaxed">Connect with genuine individuals who are serious about finding love. Start your search today and let us help you find your perfect match.</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label for="hero-field" className="leading-7 text-sm text-gray-600">Find your perfect match...</label>
                                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Get Matched</button>
                        </div>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Doctor, Engineer, Businessman....</p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-col text-center w-full mb-20">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Your Search</h1>

                                </div>
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                            <div className="flex-grow text-right">
                                                <h2 className="text-gray-900 title-font font-medium">ID: 1</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Male</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Rajshahi</h2>
                                                <h2 className="text-gray-900 title-font font-medium">25 years</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Engineer</h2>
                                                <Link to="/details">
                                                    <button className="inline-flex text-white bg-red-600  border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-lg">View Profile</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                            <div className="flex-grow text-right">
                                                <h2 className="text-gray-900 title-font font-medium">ID: 1</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Male</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Rajshahi</h2>
                                                <h2 className="text-gray-900 title-font font-medium">25 years</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Engineer</h2>
                                                <Link to="/details">
                                                    <button className="inline-flex text-white bg-red-600  border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-lg">View Profile</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                            <div className="flex-grow text-right">
                                                <h2 className="text-gray-900 title-font font-medium">ID: 1</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Male</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Rajshahi</h2>
                                                <h2 className="text-gray-900 title-font font-medium">25 years</h2>
                                                <h2 className="text-gray-900 title-font font-medium">Engineer</h2>
                                                <Link to="/details">
                                                    <button className="inline-flex text-white bg-red-600  border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-lg">View Profile</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BiodatasPage;