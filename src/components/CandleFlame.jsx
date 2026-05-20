import { useEffect, useState } from "react";

const CandleFlame = ({ size = "md", className = "" }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 1 : -1;

      setScrollDirection(direction);
      setIsScrolling(true);
      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setScrollDirection(0);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const sizeClasses = {
    sm: { width: 20, height: 30 },
    md: { width: 30, height: 45 },
    lg: { width: 40, height: 60 },
  };

  const { width, height } = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`relative ${className}`}>
      {/* Candle Base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-cream rounded-t-sm"
        style={{
          width: width * 0.8,
          height: height * 0.4,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* Wick */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-chocolate rounded-full"
          style={{ width: 2, height: height * 0.15 }}
        />
      </div>

      {/* Flame Container */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 60"
        className="absolute bottom-full left-1/2 -translate-x-1/2"
        style={{
          transform: `translateX(-50%) rotate(${
            isScrolling ? scrollDirection * 8 : 0
          }deg)`,
          transition: isScrolling
            ? "transform 0.1s ease-out"
            : "transform 0.3s ease-out",
        }}
      >
        {/* Outer Glow */}
        <ellipse
          cx="20"
          cy="45"
          rx="12"
          ry="8"
          className="flame-glow"
          fill="hsl(var(--flame-outer))"
          opacity="0.3"
        />

        {/* Outer Flame */}
        <path
          d="M20 5 C8 25, 8 45, 20 55 C32 45, 32 25, 20 5"
          className={`flame-animate ${
            isScrolling ? "flame-scroll-react" : ""
          }`}
          fill="hsl(var(--flame-outer))"
          style={{ transformOrigin: "20px 55px" }}
        />

        {/* Middle Flame */}
        <path
          d="M20 12 C12 28, 12 42, 20 50 C28 42, 28 28, 20 12"
          className="flame-animate"
          fill="hsl(var(--flame-inner))"
          style={{
            animationDelay: "0.05s",
            transformOrigin: "20px 50px",
          }}
        />

        {/* Inner Core */}
        <path
          d="M20 22 C16 32, 16 40, 20 46 C24 40, 24 32, 20 22"
          className="flame-animate"
          fill="hsl(var(--flame-core))"
          style={{
            animationDelay: "0.1s",
            transformOrigin: "20px 46px",
          }}
        />

        {/* Blue base */}
        <ellipse
          cx="20"
          cy="52"
          rx="4"
          ry="3"
          fill="#4A90D9"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

export default CandleFlame;
