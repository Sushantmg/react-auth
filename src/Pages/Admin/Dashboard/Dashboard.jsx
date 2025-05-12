import React from "react";
import { fetchUsersAxios } from "../../../services/userServices";
import { fetchProductsAxios } from "../../../services/productServices";
import { useApiCall } from "../../../hooks/useApiCall";

function Dashboard() {
    const { data: usersData, loading: usersLoading, error: usersError } = useApiCall(fetchUsersAxios);
    const { data: productsData, loading: productsLoading, error: productsError } = useApiCall(fetchProductsAxios);

    const totalUsers = usersData?.length || 0;
    const totalProducts = productsData?.length || 0;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

            {(usersLoading || productsLoading) && <p>Loading dashboard...</p>}
            {(usersError || productsError) && (
                <p className="text-red-600">Error loading data. Please try again.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Users</h2>
                    <p className="text-2xl">{totalUsers}</p>
                </div>

                <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Products</h2>
                    <p className="text-2xl">{totalProducts}</p>
                </div>

                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Sales</h2>
                    <p className="text-2xl">$5,500</p> {/* Placeholder - you can fetch this too if needed */}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-medium text-gray-700">Recent Users</h2>
                <ul className="space-y-4 mt-4">
                    {usersData?.slice(0, 3).map((user) => (
                        <li key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                            <p className="font-medium text-gray-900">
                                {user.name.firstname} {user.name.lastname} joined
                            </p>
                            <span className="text-sm text-gray-500">Username: {user.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
