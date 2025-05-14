import { NavLink } from "react-router";
import { useState } from "react";
import { fetchUsersAxios } from "../../../services/userServices";
import { useApiCall } from "../../../hooks/useApiCall";

function Users() {
    const { data, error, loading } = useApiCall(fetchUsersAxios);

    const usersPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const totalUsers = data?.length || 0;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data?.slice(indexOfFirstUser, indexOfLastUser);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalUsers / usersPerPage)) {
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
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Users</h1>

            {loading && <p>Loading users...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(currentUsers) && currentUsers.length > 0 ? (
                    currentUsers.map((user) => {
                        const avatarId = user.id % 100;
                        const gender = user.gender === "female" ? "women" : "men";
                        const avatarUrl = `https://randomuser.me/api/portraits/${gender}/${avatarId}.jpg`;

                        return (
                            <div
                                key={user.id}
                                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
                            >
                                <img
                                    src={avatarUrl}
                                    alt="User Avatar"
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {user?.name?.firstname} {user?.name?.lastname}
                                </h2>
                                <p className="text-gray-600"><strong>Username:</strong> {user?.username}</p>
                                <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
                                <p className="text-gray-600"><strong>Phone:</strong> {user?.phone}</p>
                                <p className="text-gray-600"><strong>City:</strong> {user?.address?.city}</p>
                                <NavLink to={`/admin/users/${user.id}`}>


                                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">
                                        View Profile
                                    </button>
                                </NavLink>
                            </div>
                        );
                    })
                ) : (
                    !loading && <p>No users found.</p>
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
                    Page {currentPage} of {Math.ceil(totalUsers / usersPerPage)}
                </p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(totalUsers / usersPerPage)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Users;
