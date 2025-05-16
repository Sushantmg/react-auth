import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./App.css"
import Layout from "./Components/Layout"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import AdminLayout from "./Components/Adminlayout"
import Dashboard from "./Pages/Admin/Dashboard/Dashboard"
import Users from "./Pages/Admin/Users/Users"
import Products from "./Pages/Admin/Products/Products"
import ProductDetails from "./Pages/Admin/Products/ProductDetails"
import UserDetails from "./Pages/Admin/Users/UserDetails"
import { useState } from "react"
import { CartContext } from "./context/CartContext"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
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
      { path: "users/:id", element: <UserDetails /> }
    ],
  },
])

function App() {
  const [cartData, setCartData] = useState([])
  return (

    <CartContext.Provider value={{ cartData, setCartData }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  )
}

export default App
