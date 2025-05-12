import { fetchUsersAxios } from "../../../services/userServices";
import { useApiCall } from "../../../hooks/useApiCall";

function Users() {
    const { data, error, loading } = useApiCall(fetchUsersAxios);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">User List</h1>

            {loading && <p>Loading users...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}

            {Array.isArray(data) && data.length > 0 ? (
                data.map((user) => (
                    <div
                        key={user.id}
                        className="mb-4 p-4 border rounded-lg shadow-md bg-gray-50"
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {user?.name?.firstname} {user?.name?.lastname}
                        </h2>
                        <p><strong>Username:</strong> {user?.username}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Phone:</strong> {user?.phone}</p>
                        <p>
                            <strong>Address:</strong>{" "}
                            {user?.address?.number}, {user?.address?.street}, {user?.address?.city}
                        </p>
                        <p>
                            <strong>Geo Location:</strong>{" "}
                            Lat: {user?.address?.geolocation?.lat}, Long: {user?.address?.geolocation?.long}
                        </p>
                    </div>
                ))
            ) : (
                !loading && <p>No users found.</p>
            )}
        </div>
    );
}

export default Users;
