import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProduct(data.find((p) => p.id == id));
  }, [id]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const save = () => {
    const all = JSON.parse(localStorage.getItem("products"));
    const updated = all.map((p) => (p.id == id ? product : p));
    localStorage.setItem("products", JSON.stringify(updated));
    navigate("/admin/products");
  };

  if (!product) return null;

  return (
    <div className="min-h-screen pt-24 px-6 bg-[#FFF5F0]">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      <div className="max-w-md space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full border p-3 rounded"
        />

        <input
          value={product.price}
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full border p-3 rounded"
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        <img
          src={product.image}
          alt="preview"
          className="h-40 w-full object-cover rounded"
        />

        <button
          onClick={save}
          className="bg-primary text-white px-6 py-3 rounded w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
