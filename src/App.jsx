import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { ADMIN_EMAILS } from "./utils/admin";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProducts";
import EditProduct from "./pages/EditProduct";

export default function App() {
  const [user, setUser] = useState(null);

  // 🔥 Load user from localStorage on refresh
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
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* 🔐 Protected Admin Routes */}
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
    </>
  );
}
