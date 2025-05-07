import React from "react";
import { NavLink } from "react-router";
import Logout from "./Logout";

function AdminSider() {
    return (
        <div>
            <button
                data-drawer-target="separator-sidebar"
                data-drawer-toggle="separator-sidebar"
                aria-controls="separator-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            <aside
                id="separator-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 text-white"
                aria-label="Sidebar"
            >
                <div className="h-full flex flex-col px-3 py-4 overflow-y-auto">
                    <NavLink to="/">
                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="mx-auto h-10 w-auto mb-6"
                        />
                    </NavLink>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink
                                to="/admin/dashboard"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group transition-all duration-300"
                            >
                                <span className="ms-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/users"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group transition-all duration-300"
                            >
                                <span className="ms-3">Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/products"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group transition-all duration-300"
                            >
                                <span className="ms-3">Products</span>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <Logout />
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default AdminSider;
