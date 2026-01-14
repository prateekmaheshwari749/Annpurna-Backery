import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryTabs from "../components/CategoryTabs";

const products = [
  { id: 1, name: "Chocolate Cake", price: 450, category: "Cakes", image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa" },
  { id: 2, name: "Black Forest", price: 550, category: "Cakes", image: "https://images.unsplash.com/photo-1602351447937-745cb720612f" },
  { id: 3, name: "Strawberry Pastry", price: 120, category: "Pastries", image: "https://images.unsplash.com/photo-1612197527762-8cfb7a8d52b9" },
  { id: 4, name: "Butter Biscuit", price: 80, category: "Biscuits", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Cakes");

  const filtered = products.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: "center", color: "#7B2C2C" }}>
        🍰 Bakery Menu
      </h1>

      <CategoryTabs
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
