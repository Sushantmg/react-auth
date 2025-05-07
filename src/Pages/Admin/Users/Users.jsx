import React from "react";

function Users() {

    const users = [
        { id: 1, name: "John Doe", email: "Sushan@gmail.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "Ujwal@gmail.com", role: "User", status: "Inactive" },
        { id: 3, name: "Alice Johnson", email: "Asim@gmail.com", role: "Moderator", status: "Active" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">Users</h1>


            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-600">Name</th>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-600">Email</th>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-600">Role</th>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2">{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
