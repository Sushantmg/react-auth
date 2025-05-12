import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-100 transition"
        >
            Logout
        </button>
    );
}

export default Logout;
