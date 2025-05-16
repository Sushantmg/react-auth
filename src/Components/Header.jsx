import React from "react";
import { NavLink } from "react-router-dom"; // fixed from "react-router"
import Logout from "./Logout";
import CartView from "./CartView";

const navlinkClasses =
    "px-4 py-2 rounded-md transition-all duration-300 text-white hover:bg-white hover:text-indigo-600";

function Header() {
    const token = localStorage.getItem("token");

    return (
        <header className="bg-indigo-600 shadow-md">
            <div className="flex items-center justify-between px-6 py-3 max-w-screen-xl mx-auto">
                <ul className="flex gap-4">
                    <li>
                        <NavLink className={navlinkClasses} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkClasses} to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkClasses} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkClasses} to="/contact">Contact</NavLink>
                    </li>
                </ul>
                {token ? <Logout /> : (
                    <NavLink
                        to="/login"
                        className="ml-auto bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-100 transition"
                    >
                        Login
                    </NavLink>
                )}

            </div>
            <CartView />
        </header>
    );
}

export default Header;
