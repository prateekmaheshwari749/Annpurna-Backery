import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="min-h-screen pt-24 px-6 bg-[#FFF5F0]">
      <h1 className="text-3xl font-serif font-bold text-primary mb-8">
        Admin Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
        <Link
          to="/admin/add"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          ➕ Add Product
        </Link>

        <Link
          to="/admin/products"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          📦 Manage Products
        </Link>
      </div>
    </div>
  );
}
