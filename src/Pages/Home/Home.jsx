import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-200 px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h1 className="text-5xl sm:text-4xl font-bold text-indigo-800 drop-shadow-md">
                        Discover the Best Deals on Fashion & Gadgets!
                    </h1>
                    <p className="text-lg text-gray-700 font-medium">
                        Shop from our wide range of latest collections — quality products at unbeatable prices. Fast delivery and easy returns!
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        🛍️ Shop Now
                    </Link>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Cover12.jpg"
                        alt="Shopping illustration"
                        className="w-full max-w-md rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
