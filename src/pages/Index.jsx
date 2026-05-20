import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";
import { useEffect } from "react";

const Index = () => {

  // 🕯️ Candle scroll animation
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
    <div className="min-h-screen bg-background">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* PRODUCT LIST */}
      <ProductList />

      {/* 🕯️ FLOATING CANDLE */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-chocolate text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Annapurna Bakery
              </h3>
              <p className="text-cream/70 text-sm">
                Freshly baked breads, cakes & pastries made with love.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>Menu</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Catering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>Mon–Fri: 7am – 7pm</li>
                <li>Saturday: 8am – 6pm</li>
                <li>Sunday: 8am – 4pm</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>Chennai, India</li>
                <li>+91 XXXXX XXXXX</li>
                <li>hello@annapurnabakery.com</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-cream/20 mt-8 pt-8 text-center text-sm text-cream/50">
            © 2025 Annapurna Bakery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
