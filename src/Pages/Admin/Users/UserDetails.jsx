import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchUserById } from '../../../services/userServices';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetchUserById(id);
                setUser(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);
    console.log(id)
    if (loading) return <p>Loading user...</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex justify-center mb-4">
                <img
                    src="https://randomuser.me/api/portraits/${gender}/${avatarId}.jpg"
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border-4 border-indigo-600"
                />
            </div>

            <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                {user.name.firstname} {user.name.lastname}
            </h1>

            <div className="space-y-4">
                <p className="text-gray-600 text-lg">
                    <strong>Username:</strong> {user.username}
                </p>
                <p className="text-indigo-600 font-semibold text-lg">
                    <strong>Email:</strong> {user.email}
                </p>
                <p className="text-indigo-600 font-semibold text-lg">
                    <strong>Password:</strong> {user.password}
                </p>
            </div>
        </div>

    );
}

export default UserDetail;
