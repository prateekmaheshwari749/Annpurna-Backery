import ProductList from "@/components/ProductList";

const Products = () => {
  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      <ProductList />
    </div>
  );
};

export default Products;
