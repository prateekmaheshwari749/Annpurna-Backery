import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const updated = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
  };

  return (
    <div className="min-h-screen pt-28 px-6 bg-[#FFF5F0]">
      <h2 className="text-3xl font-bold mb-8 text-[#7B2C2C]">
        Manage Products
      </h2>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <p className="text-gray-600">
          No products added yet.
        </p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h3 className="font-bold mt-3 text-lg">
              {p.name}
            </h3>

            <p className="text-gray-700 mb-3">
              ₹ {p.price}
            </p>

            <div className="flex gap-4">
              <Link
                to={`/admin/edit/${p.id}`}
                className="text-blue-600 font-medium"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteProduct(p.id)}
                className="text-red-600 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
