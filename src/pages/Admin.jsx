import { Link } from "react-router-dom";

export default function Admin({ user }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>👩‍🍳 Admin Dashboard</h2>
      <p>Welcome, Admin</p>
      <p>{user?.email}</p>

      <div style={{ marginTop: 20 }}>
        <Link to="/admin/add">
          <button>Add Product</button>
        </Link>

        <Link to="/admin/products" style={{ marginLeft: 10 }}>
          <button>Edit / Delete Products</button>
        </Link>
      </div>
    </div>
  );
}
