import React from 'react';

const Home = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white px-6">
            <div className="text-center max-w-xl">
                <h1 className="text-5xl font-extrabold drop-shadow-lg sm:text-4xl">
                    SUSHAN TAMANG
                </h1>
                <p className="text-lg sm:text-base text-slate-200 font-medium mt-6 backdrop-blur-sm bg-black/30 p-7 rounded-lg shadow-lg">
                    SUSHAN is a passionate web developer with a strong foundation in HTML, CSS, and JavaScript.
                </p>
                <a
                    href="/contact"
                    className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
                    🚀 Get in Touch
                </a>
            </div>
        </div>
    );
};

export default Home;
