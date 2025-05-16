import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchProductById } from "../../../services/productServices";
import {
    MinusIcon,
    PlusIcon,
    ArrowPathIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const count = parseInt(searchParams.get("count")) || 0;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-lg text-gray-700">Loading product...</p>;
    if (error) return <p className="text-red-600 text-center">Error: {error}</p>;
    if (!product) return <p className="text-center text-gray-600">Product not found.</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 flex justify-center items-start">
            <div className="w-full max-w-4xl bg-white/40 backdrop-blur-lg border border-gray-300 rounded-3xl shadow-2xl p-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">{product.title}</h1>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full md:w-1/2 h-72 object-contain bg-white/60 p-4 rounded-xl shadow-md"
                    />

                    <div className="flex-1 space-y-4">
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-semibold text-indigo-600">
                            💵 Price: ${product.price}
                        </p>
                        <p className="text-lg font-semibold text-indigo-600">
                            🏷️ Category: {product.category}
                        </p>
                        <p className="text-lg font-semibold text-indigo-600">
                            ⭐ Rating: {product.rating?.rate || "N/A"} ({product.rating?.count || 0} reviews)
                        </p>

                        <button
                            className="flex items-center justify-center gap-2 mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl shadow transition duration-300"
                            onClick={() => {
                                setSearchParams({ search: product.title });
                            }}
                        >
                            <ShoppingCartIcon className="h-5 w-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="mt-10 max-w-md mx-auto bg-white/50 backdrop-blur-lg border border-gray-300 rounded-2xl shadow-xl p-6 text-center space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Quantity Selector</h2>

                    <div className="flex items-center justify-center space-x-6">
                        <button
                            className="p-3 rounded-full bg-red-500 hover:bg-red-600 shadow-lg transition"
                            onClick={() =>
                                setSearchParams({ count: count - 1, search: searchValue })
                            }
                        >
                            <MinusIcon className="h-5 w-5 text-white" />
                        </button>

                        <span className="text-2xl font-bold text-gray-900">{count}</span>

                        <button
                            className="p-3 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition"
                            onClick={() =>
                                setSearchParams({ count: count + 1, search: searchValue })
                            }
                        >
                            <PlusIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                    {
                        count !== 0 ? (
                            <button
                                className="flex items-center justify-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-md transition"
                                onClick={() => setSearchParams({ count: 0, search: searchValue })}
                            >
                                <ArrowPathIcon className="h-5 w-5" />
                                <span className="font-medium">Reset</span>

                            </button>) : "  "
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
