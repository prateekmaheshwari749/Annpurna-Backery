import { useEffect, useState } from "react";
import { getAllProducts } from "@/utils/products";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getAllProducts().then((loadedProducts) => {
      if (isMounted) {
        setProducts(loadedProducts);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pt-28 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.length === 0 && <p>No products available</p>}

      {products.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded shadow">
          <img
            src={p.image}
            alt={p.name}
            className="h-40 w-full object-cover rounded"
          />
          <h3 className="font-bold mt-2">{p.name}</h3>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}
