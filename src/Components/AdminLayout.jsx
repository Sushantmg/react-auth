import React from "react";
import { Navigate, Outlet } from "react-router";
import AdminHeader from './Admin-header';
import AdminSider from "./Admin-sider";

function AdminLayout() {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex gap-10">

                <AdminSider />


                <div className="flex-1">
                    <div className="p-4 sm:ml-64">

                        <AdminHeader />


                        <div className="mt-4">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
