import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { getProductById } from "@/utils/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getProductById(id).then((loadedProduct) => {
      if (isMounted) {
        setProduct(loadedProduct);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen pt-28 px-6 bg-[#FFF5F0]">
        <p className="text-center text-gray-600">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-28 px-6 bg-[#FFF5F0]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-primary font-semibold">
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-[#FFF5F0]">
      <div className="max-w-6xl mx-auto px-5 py-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>

        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="bg-white rounded-xl shadow p-6 md:p-8">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3b1608] mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary mb-5">
              Rs. {product.price}
            </p>
            <p className="text-gray-700 leading-7 mb-6">
              {product.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7 text-sm text-gray-700">
              <div className="border rounded-lg p-4">
                <p className="font-semibold text-[#3b1608]">Made Fresh</p>
                <p>Prepared with fresh bakery ingredients.</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-semibold text-[#3b1608]">Customizable</p>
                <p>Available for celebration orders.</p>
              </div>
            </div>

            <a
              href="tel:+919999999999"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
