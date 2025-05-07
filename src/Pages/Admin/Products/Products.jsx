import React from "react";

function Products() {
    const products = [
        {
            id: 1,
            name: "iPhone 16 Pro Max",
            price: "$1,299",
            image: 'https://static.iphoned.nl/orca/products/23030/apple-iphone-16-pro-max.png',
            description: "The latest flagship from Apple featuring the A18 chip, a stunning ProMotion XDR display, and a titanium body.",
        },
        {
            id: 2,
            name: "iPad Pro 7th Generation",
            price: "$1,099",
            image: "https://media.idownloadblog.com/wp-content/uploads/2019/09/7th-gen-iPad-launch-image.jpg",
            description: "Powerful and lightweight, this iPad features the M3 chip, Liquid Retina display, and supports Apple Pencil Pro.",
        },
        {
            id: 3,
            name: "MacBook Air",
            price: "$1,199",
            image: "https://consomac.fr/images/news/macbookair-2018-reviews-header.jpg",
            description: "Ultra-thin laptop with the Apple M3 chip, offering all-day battery life and fanless design in a sleek aluminum body.",
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Products</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-contain mb-4"
                        />
                        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <p className="text-indigo-600 font-semibold mt-3">Price: {product.price}</p>
                        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
