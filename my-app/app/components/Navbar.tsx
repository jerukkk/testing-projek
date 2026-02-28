"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home" },
  { name: "About" },
  { name: "World Review" },
  { name: "Makassar MUN" },
  { name: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-3 md:px-4 hidden md:flex">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 md:gap-3 px-3 md:px-10 py-2 md:py-4 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg py-1.5"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative px-8 py-2 text-sm font-medium transition-colors"
            >
              {/* Text Link */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  active === item.name ? "text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </span>

              {/* Red Pill (Only appears on active item) */}
              {active === item.name && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-mun-red rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
