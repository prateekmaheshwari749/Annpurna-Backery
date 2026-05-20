import { Plus, Heart } from "lucide-react";

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
}) => {
  return (
    <div className="card-bakery group cursor-pointer hover-lift">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              New
            </span>
          )}
          {isBestseller && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
              Bestseller
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-chocolate/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-maroon-light transition-colors">
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </span>

        <h3 className="font-serif text-lg font-medium text-foreground mt-1 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-primary">
            ₹{price.toFixed(2)}
          </span>

          <button className="md:hidden w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
