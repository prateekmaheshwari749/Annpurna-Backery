import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/annapurnabakery",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@annapurnabakery",
    icon: Youtube,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/annapurnabakery",
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#4a1f1f] text-[#fff3e8] py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Annapurna Bakery
            </h3>
            <p className="text-sm opacity-80 leading-6">
              Freshly baked breads, cakes and pastries made with love for every
              celebration.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/info" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Chennai, India</li>
              <li>+91 XXXXX XXXXX</li>
              <li>annapurnabakery@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
          © 2026 Annapurna Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
