import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { fetchProductsAxios } from "../../../services/productServices";
import { useApiCall } from "../../../hooks/useApiCall";

function Products() {
    const { data, error, loading } = useApiCall(fetchProductsAxios);

    const productsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalProducts = data?.length || 0;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-6">
            {loading && <p>Loading products...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}

            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Products</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-contain mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-indigo-600 font-semibold mt-3">Price: ${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">
                                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">
                                    View Details
                                </button>
                            </NavLink>


                        </div>
                    ))
                ) : (
                    !loading && <p>No products found or data is invalid.</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 disabled:opacity-50"
                >
                    Previous
                </button>
                <p className="text-xl text-gray-700">
                    Page {currentPage} of {Math.ceil(totalProducts / productsPerPage)}
                </p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Products;
