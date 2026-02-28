"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", icon: "/home.png" },
  { name: "About", icon: "/about.png" },
  { name: "Review", icon: "/review.png" },
  { name: "Communication", icon: "/communication-center.png" },
  { name: "Makassar MUN", icon: "/[ MEET THE MAKASSAR MUN 2025 TEAM ]Greetings, Delegates!Makassar MUN 2025 proudly presents the m.jpg" },
];

export default function MobileNav() {
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
    <nav className="fixed bottom-4 left-0 right-0 z-50 md:hidden flex justify-center px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 px-4 py-3 rounded-[2rem] border border-white/20 shadow-xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative flex items-center justify-center p-2"
          >
            {/* Active indicator - red pill background */}
            {active === item.name && (
              <motion.div
                layoutId="mobile-nav-active"
                className="absolute inset-0 bg-mun-red rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <div className="relative z-10 w-8 h-8 flex items-center justify-center">
              {item.name === "Makassar MUN" ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-cover rounded-full"
                />
              ) : (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
