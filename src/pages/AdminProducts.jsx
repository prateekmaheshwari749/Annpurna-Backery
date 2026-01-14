import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Chocolate Cake", price: 500 },
  { id: 2, name: "Pastry", price: 80 }
];

export default function AdminProducts() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Edit / Delete Products</h3>

      {dummyProducts.map(p => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          {p.name} - ₹{p.price}

          <Link to={`/admin/edit/${p.id}`}>
            <button style={{ marginLeft: 10 }}>✏️ Edit</button>
          </Link>

          <button style={{ marginLeft: 5 }}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
}
