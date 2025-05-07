import React from "react";
import { useNavigate } from "react-router";

function Logout() {
    const navigate = useNavigate();

    const logoutClick = () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Redirect to login page
    };

    return (
        <button
            className="mx-3 mt-8 flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 group transition duration-300"
            onClick={logoutClick}
        >
            <span className="ml-2">Logout</span>
        </button>
    );
}

export default Logout;
