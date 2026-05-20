import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64
    };
    reader.readAsDataURL(file);
  };

  const addProduct = () => {
    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    const old = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
    };

    localStorage.setItem("products", JSON.stringify([...old, newProduct]));
    navigate("/admin/products");
  };

  return (
    <div className="min-h-screen pt-24 px-6 bg-[#FFF5F0]">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <p className="mb-4 max-w-md text-gray-700">
        Products added here are saved only in this browser. For public hosted
        products, add images to public/products and update products.json.
      </p>

      <div className="max-w-md space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          placeholder="Product Name"
          className="w-full border p-3 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          type="number"
          className="w-full border p-3 rounded"
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* IMAGE PICKER */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="w-full"
        />

        {/* IMAGE PREVIEW */}
        {image && (
          <img
            src={image}
            alt="preview"
            className="h-40 w-full object-cover rounded"
          />
        )}

        <button
          onClick={addProduct}
          className="bg-primary text-white px-6 py-3 rounded w-full"
        >
          Save Product
        </button>
      </div>
    </div>
  );
}
