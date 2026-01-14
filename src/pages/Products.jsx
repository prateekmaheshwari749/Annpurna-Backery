import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1601979031925-424e53b6caaa",
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1612197527276-0e64f6f7c6c5",
  },
  {
    id: 3,
    name: "Black Forest Cake",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 4,
    name: "Blueberry Cheesecake",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1542826438-7d0b38e0e7c5",
  },
];

export default function Products() {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: "center", color: "#7B2C2C" }}>
        🍰 Our Cakes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 25,
          marginTop: 30,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
