const HOSTED_PRODUCTS_URL = "/products/products.json";

const defaultProducts = [
  {
    id: "classic-croissant",
    name: "Classic Croissant",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop",
    category: "Pastries",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop",
    category: "Cakes",
  },
  {
    id: "sourdough-loaf",
    name: "Sourdough Loaf",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop",
    category: "Breads",
  },
  {
    id: "fruit-danish",
    name: "Fruit Danish",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&h=600&fit=crop",
    category: "Pastries",
  },
  {
    id: "butter-cookies",
    name: "Butter Cookies",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop",
    category: "Cookies",
  },
  {
    id: "black-forest-cake",
    name: "Black Forest Cake",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
    category: "Cakes",
  },
];

const normalizeProduct = (product, fallbackId) => ({
  id: product.id || fallbackId,
  name: product.name || "Untitled Product",
  price: Number(product.price) || 0,
  image: product.image || "",
  category: product.category || "Bakery",
  description:
    product.description ||
    "Freshly prepared with care using quality ingredients for a rich bakery taste.",
});

export const getLocalProducts = () => {
  try {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    return products.map((product, index) =>
      normalizeProduct(product, `local-${index}`)
    );
  } catch {
    return [];
  }
};

export const getHostedProducts = async () => {
  try {
    const response = await fetch(HOSTED_PRODUCTS_URL, { cache: "no-cache" });

    if (!response.ok) {
      return [];
    }

    const products = await response.json();

    if (!Array.isArray(products)) {
      return [];
    }

    return products.map((product, index) =>
      normalizeProduct(product, `hosted-${index}`)
    );
  } catch {
    return [];
  }
};

export const getAllProducts = async () => {
  const hostedProducts = await getHostedProducts();
  const localProducts = getLocalProducts();
  const products = [...hostedProducts, ...localProducts];

  return products.length > 0 ? products : defaultProducts;
};

export const getProductById = async (id) => {
  const products = await getAllProducts();
  return products.find((product) => String(product.id) === String(id)) || null;
};
