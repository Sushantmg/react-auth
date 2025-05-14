import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchProductById } from "../../../services/productServices";

function ProductDetail() {
    const { id } = useParams(); // Extract product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const count = parseInt(searchParams.get("count")) || 0;
    searchParams.forEach((value, key) => console.log({ [key]: value }));

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchProductById(id); // Fetch the product by ID
                setProduct(response.data); // Store the product data
            } catch (err) {
                setError(err.message); // Handle any errors
            } finally {
                setLoading(false); // Set loading state to false once finished
            }
        };

        fetchProduct();
    }, [id]); // This effect runs when the 'id' in the URL changes

    if (loading) return <p>Loading product...</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                {product.title}
            </h1>
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-4"
            />
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-indigo-600 font-semibold mt-3">
                Price: ${product.price}
            </p>
            <p className="text-indigo-600 font-semibold mt-3">
                Category: {product.category}
            </p>
            <p className="text-indigo-600 font-semibold mt-3">
                Rating: {product.rating?.rate || "N/A"} ({product.rating?.count || 0}{" "}
                reviews)
            </p>

            <button
                onClick={() => {
                    setSearchParams({
                        count: count,
                        search: phone.title,
                    });
                }}
            ></button>

            <button
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition"
                onClick={() => {
                    setSearchParams({ search: product.title });
                }}
            >
                Add to Cart
            </button>
            <button
                onClick={() => {
                    setSearchParams({ count: count - 1, search: searchValue });
                }}
            >minus</button>
            <button
                onClick={() => {
                    setSearchParams({ count: count + 1, search: searchValue });
                }}
            >add</button>
        </div>
    );
}

export default ProductDetail;
