import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";

const Home = () => {
  useEffect(() => {
    const flame = document.querySelector(".flame");
    if (!flame) return;

    const onScroll = () => {
      flame.style.transform = `translateX(-50%) translateY(${
        window.scrollY * 0.02
      }px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      <HeroSection />

      <ProductList />

      <div className="fixed bottom-6 right-6 z-40">
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
