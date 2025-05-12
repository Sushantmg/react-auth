import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-white via-indigo-50 to-purple-100">
            <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-indigo-700 text-center mb-6">
                About Sushan Shopping
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-6xl text-justify leading-relaxed px-4 sm:px-8">
                Welcome to <span className="text-indigo-600 font-semibold">Sushan Shopping</span> — your one-stop destination for high-quality fashion, electronics, and lifestyle essentials at unbeatable prices. We believe shopping should be fun, easy, and affordable, and that’s exactly what we deliver every single day.
                <br /><br />
                Our journey began with a simple goal: to create an online platform where customers can find everything they need, all in one place, without the hassle. We’re proud to offer a wide range of handpicked products that combine functionality, quality, and style.
                <br /><br />
                Whether you're looking for the latest in men’s and women’s fashion, tech gadgets, home essentials, or beauty products — we've got you covered. We collaborate with trusted suppliers and verified brands to ensure every product meets our high standards.
                <br /><br />
                At the heart of our operations is a customer-first philosophy. We prioritize your shopping experience from start to finish — offering fast and secure delivery, simple returns, and dedicated customer support that’s always ready to help.
                <br /><br />
                We are constantly updating our inventory with new arrivals to keep up with trends and provide fresh collections every week. Plus, our seasonal discounts and exclusive deals mean you can save while shopping smarter.
                <br /><br />
                Our platform is built with the latest technologies for a fast, secure, and mobile-friendly experience. Whether you’re browsing from your phone or desktop, Sushan Shopping is optimized for a seamless journey.
                <br /><br />
                Transparency is key to us. We provide detailed product descriptions, real customer reviews, and high-quality images so you know exactly what you're buying. No surprises — just satisfaction.
                <br /><br />
                We’re more than just a store — we’re a growing community of shoppers who appreciate convenience, value, and good service. Join our newsletter and follow us on social media to stay updated on new drops and limited-time offers.
                <br /><br />
                Founded by passionate entrepreneurs who understand the power of technology and eCommerce, Sushan Shopping is committed to pushing boundaries and creating a shopping platform that truly serves people.
                <br /><br />
                Thank you for choosing Sushan Shopping. We look forward to becoming your favorite online destination for all things stylish, useful, and affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                    href="/products"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg font-medium"
                >
                    🛍️ Start Shopping
                </a>
                <a
                    href="/contact"
                    className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-100 transition duration-300 shadow-md hover:shadow-lg font-medium"
                >
                    📞 Contact Us
                </a>
            </div>
        </div>
    );
};

export default About;
