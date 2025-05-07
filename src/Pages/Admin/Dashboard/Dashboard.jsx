import React from "react";

function Dashboard() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Users</h2>
                    <p className="text-2xl">1,200</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Sales</h2>
                    <p className="text-2xl">$5,500</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Pending Orders</h2>
                    <p className="text-2xl">45</p>
                </div>
            </div>


            <div className="mt-6">
                <h2 className="text-2xl font-medium text-gray-700">Recent Activity</h2>
                <ul className="space-y-4 mt-4">
                    <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-gray-900">User John Doe signed up</p>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                    </li>
                    <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-gray-900">Order #12345 shipped</p>
                        <span className="text-sm text-gray-500">3 hours ago</span>
                    </li>
                    <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-gray-900">New feedback received</p>
                        <span className="text-sm text-gray-500">5 hours ago</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
