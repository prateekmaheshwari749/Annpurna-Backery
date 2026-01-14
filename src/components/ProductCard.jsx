export default function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 15,
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        textAlign: "center",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />

      <h3 style={{ color: "#7B2C2C", marginTop: 10 }}>
        {product.name}
      </h3>

      {/* PRICE BELOW PRODUCT NAME */}
      <p style={{ fontWeight: "bold", fontSize: 18 }}>
        ₹ {product.price}
      </p>

      <button
        style={{
          background: "#7B2C2C",
          color: "white",
          border: "none",
          padding: "8px 18px",
          borderRadius: 20,
          cursor: "pointer",
          marginTop: 8,
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
