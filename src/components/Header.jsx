import React from "react";

export default function Header({ setPage }) {
  return (
    <header className="site-header">
      <div className="brand" onClick={() => setPage("home")}>
        <div className="logo-dot" />
        <div>
          <h3>Annapurna Bakery</h3>
          <small>Traditional & Fresh</small>
        </div>
      </div>

      <nav className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Menu</button>
        <button onClick={() => setPage("admin")}>Admin</button>
      </nav>
    </header>
  );
}
