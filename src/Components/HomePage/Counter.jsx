import React from 'react';

const Counter = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.8K</h2>
                            <p className="leading-relaxed">Total Biodatas</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.3K</h2>
                            <p className="leading-relaxed">Girls</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.5K</h2>
                            <p className="leading-relaxed">Boys</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">400+</h2>
                            <p className="leading-relaxed">Mariages</p>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Counter;