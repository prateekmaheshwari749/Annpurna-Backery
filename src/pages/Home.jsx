import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";
import { useEffect } from "react";

const Home = () => {
  // 🔥 Candle scroll animation
  useEffect(() => {
    const flame = document.querySelector(".flame");
    if (!flame) return;

    const onScroll = () => {
      flame.style.transform =
        `translateX(-50%) translateY(${window.scrollY * 0.02}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      {/* HERO SECTION (Explore button yahin se Menu page pe jaata hai) */}
      <HeroSection />

      {/* PRODUCTS (Admin jo add karega wahi yahan dikhega) */}
      <ProductList />

      {/* 🕯️ FLOATING CANDLE */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>

      {/* FOOTER (NO HOURS – AS YOU ASKED) */}
      <footer className="bg-[#4a1f1f] text-[#fff3e8] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* BRAND */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Annapurna Bakery
              </h3>
              <p className="text-sm opacity-80">
                Freshly baked breads, cakes & pastries made with love.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Home</li>
                <li>Menu</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-medium mb-3">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>📍 Chennai, India</li>
                <li>📞 +91 XXXXX XXXXX</li>
                <li>📧 annapurnabakery@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
            © 2025 Annapurna Bakery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
