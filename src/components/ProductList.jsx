import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "@/utils/products";

const ProductList = () => {
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

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-10">
        No products added yet.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/products/${p.id}`}
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition block"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-40 w-full object-cover rounded-lg"
          />

          <h3 className="font-bold mt-3 text-lg">{p.name}</h3>

          <p className="text-gray-700">Rs. {p.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
