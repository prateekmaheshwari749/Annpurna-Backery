import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Classic Croissant',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    category: 'Pastries',
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Chocolate Éclair',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=400&fit=crop',
    category: 'Pastries',
    isNew: true,
  },
  {
    id: '3',
    name: 'Sourdough Loaf',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    category: 'Breads',
    isBestseller: true,
  },
  {
    id: '4',
    name: 'Almond Tart',
    price: 6.75,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop',
    category: 'Tarts',
  },
  {
    id: '5',
    name: 'Cinnamon Roll',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?w=400&h=400&fit=crop',
    category: 'Pastries',
    isNew: true,
  },
  {
    id: '6',
    name: 'Baguette',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    category: 'Breads',
  },
  {
    id: '7',
    name: 'Fruit Danish',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=400&fit=crop',
    category: 'Pastries',
  },
  {
    id: '8',
    name: 'Brioche Bun',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=400&fit=crop',
    category: 'Breads',
    isBestseller: true,
  },
];

const categories = ['All', 'Pastries', 'Breads', 'Tarts'];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Selection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3">
            Freshly Baked Daily
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Handcrafted with love using only the finest ingredients. Each item is baked fresh every morning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-bakery'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-bakery-secondary">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
