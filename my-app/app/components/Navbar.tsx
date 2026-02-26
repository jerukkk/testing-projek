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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-3 md:px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 md:gap-3 px-3 md:px-10 py-2 md:py-4 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg py-1.5"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Logo - Mobile only */}
        <div className="md:hidden flex items-center justify-center w-8 h-8 flex-shrink-0">
          <img
            src="/LOGO UNHASMUN 25 (1).webp"
            alt="UNHAS MUN"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center flex-shrink-0"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
            <span
              className={`block w-4 h-0.5 bg-mun-dark transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-mun-dark transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-mun-dark transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}
                  className={`relative px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === item.name ? "text-white" : "text-gray-600"
                  }`}
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="nav-active-mobile"
                      className="absolute inset-0 bg-mun-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
