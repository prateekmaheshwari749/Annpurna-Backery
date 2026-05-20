import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { ADMIN_EMAILS } from "./utils/admin";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProducts";
import EditProduct from "./pages/EditProduct";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

  return (
    <>
      <Navbar user={user} isAdmin={isAdmin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route
          path="/admin"
          element={isAdmin ? <Admin user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/add"
          element={isAdmin ? <AddProduct /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/products"
          element={isAdmin ? <AdminProducts /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/edit/:id"
          element={isAdmin ? <EditProduct /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </>
  );
}
