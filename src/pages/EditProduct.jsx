import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EditProduct() {
  const { id } = useParams();
  const [price, setPrice] = useState("");

  const updateProduct = () => {
    alert(`Product ${id} updated with price ₹${price}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Edit Product</h3>

      <input
        placeholder="New price"
        onChange={e => setPrice(e.target.value)}
      />

      <br />
      <button onClick={updateProduct}>Update</button>
    </div>
  );
}
