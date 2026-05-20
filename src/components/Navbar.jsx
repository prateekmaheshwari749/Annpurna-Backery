import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ user, isAdmin }) => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block text-lg md:text-sm hover:text-primary transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="font-serif text-lg font-bold text-primary">
          Annapurna Bakery
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/menu" className={linkClass}>Menu</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>


          {!user && (
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          )}

          {isAdmin && (
            <NavLink
              to="/admin"
              className="font-semibold text-primary"
            >
              Admin Panel
            </NavLink>
          )}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6 bg-white">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className={linkClass}>
            Products
          </NavLink>


          <NavLink to="/menu" onClick={() => setOpen(false)} className={linkClass}>
            Menu
          </NavLink>

          {!user && (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Login
            </NavLink>
          )}

          {isAdmin && (
            <NavLink
              to="/admin"
              onClick={() => setOpen(false)}
              className="font-semibold text-primary text-lg"
            >
              Admin Panel
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
