export default function CategoryTabs({ active, setActive }) {
  const categories = ["Cakes", "Pastries", "Biscuits", "Bread"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 15,
        marginBottom: 30,
        flexWrap: "wrap",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          style={{
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            cursor: "pointer",
            background: active === cat ? "#7B2C2C" : "#eee",
            color: active === cat ? "white" : "#333",
            fontWeight: "bold",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
