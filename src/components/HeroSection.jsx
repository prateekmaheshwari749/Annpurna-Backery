import { Link } from "react-router-dom";
import CandleFlame from "./CandleFlame";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#FFF5F0] overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-red-200/20 rounded-full blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            
            {/* Est */}
            <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="h-14 w-9 relative">
                <CandleFlame size="md" />
              </div>
              <span className="text-[#7B2C2C] font-medium tracking-widest uppercase text-xs">
                Est. 2020
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4a1f1f]">
              Annapurna Bakery
              <span className="block text-[#7B2C2C] mt-2">
                Since 2020
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Freshly baked breads, cakes, and pastries made with traditional
              recipes, premium ingredients, and home-style craftsmanship.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              
              {/* ✅ WORKING EXPLORE BUTTON */}
              <Link
                to="/products"
                className="bg-[#7B2C2C] text-white px-8 py-3 rounded-full font-semibold text-center"
              >
                Explore Products
              </Link>

              <button className="border border-[#7B2C2C] text-[#7B2C2C] px-8 py-3 rounded-full font-medium hover:bg-[#7B2C2C] hover:text-white transition">
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-300 max-w-xl mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#7B2C2C]">
                  5+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#7B2C2C]">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Unique Recipes
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#7B2C2C]">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-[360px]">
              
              {/* Circle */}
              <div className="absolute inset-0 bg-orange-100 rounded-full" />

              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop"
                  alt="Fresh baked bread"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -right-4 top-1/4 bg-white p-3 rounded-xl shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100&h=100&fit=crop"
                    alt="Croissant"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Fresh Croissants</p>
                    <p className="text-xs text-[#7B2C2C]">Baked today</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="absolute -left-4 bottom-1/4 bg-white p-3 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <div>
                    <p className="text-sm font-medium">4.9 Rating</p>
                    <p className="text-xs text-gray-600">
                      1,000+ reviews
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
 