import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext"

import "./App.css";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AdminLayout from "./Components/Adminlayout";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Users from "./Pages/Admin/Users/Users";
import Products from "./Pages/Admin/Products/Products";
import ProductDetails from "./Pages/Admin/Products/ProductDetails";
import UserDetails from "./Pages/Admin/Users/UserDetails";
import ThemeSwitcher from "./context/ThemeSwitcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
      { path: "users/:id", element: <UserDetails /> },
    ],
  },
]);


function AppContent() {
  const { theme } = useContext(ThemeContext);

  const [cartData, setCartData] = useState([]);

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-all`}>
      <CartContext.Provider value={{ cartData, setCartData }}>

        <ThemeSwitcher />
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
