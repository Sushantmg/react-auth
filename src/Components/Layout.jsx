import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />


            <div className="flex-1 p-4 sm:px-6 lg:px-16 xl:px-32">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

export default Layout;
