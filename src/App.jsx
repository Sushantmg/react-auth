import { createBrowserRouter, RouterProvider } from "react-router";
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

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;