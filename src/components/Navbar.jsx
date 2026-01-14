import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
  FaBirthdayCake,
  FaShoppingCart,
  FaUser,
  FaEdit,
  FaUserShield,
} from "react-icons/fa";

export default function Navbar({ isAdmin }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="nav-top">
        <h2 className="logo">Annapurna Bakery</h2>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU */}
      <div className={`nav-menu ${open ? "open" : ""}`}>
        <NavItem to="/" icon={<FaHome />} label="Home" />
        <NavItem to="/menu" icon={<FaStore />} label="Menu" />

        {isAdmin && (
          <>
            <NavItem to="/admin" icon={<FaUserShield />} label="Admin" />
            <NavItem
              to="/admin/products"
              icon={<FaEdit />}
              label="Edit Products"
            />
          </>
        )}

        <NavItem to="/products" icon={<FaBirthdayCake />} label="Products" />
        <NavItem to="/cart" icon={<FaShoppingCart />} label="Cart" />
        <NavItem to="/login" icon={<FaUser />} label="Login" />
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link to={to} className="nav-item">
      {icon}
      <span>{label}</span>
    </Link>
  );
}
