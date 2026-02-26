Siap, Amar! Mari kita pertajam Navbarnya agar persis seperti di desain: melayang (*floating*), berbentuk kapsul (*pill-shaped*), dan **Sticky** (tetap di atas saat di-*scroll*).

Desain Anda menggunakan gaya *Glassmorphism* yang bersih dengan indikator aktif berwarna merah. Berikut adalah kodenya menggunakan Tailwind CSS dan sedikit bantuan `framer-motion` agar transisi tombol aktifnya terlihat sangat halus.

### Komponen Navbar (`components/Navbar.tsx`)

```tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Councils", href: "/councils" },
  { name: "Merchandise", href: "/merchandise" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll agar navbar sedikit berubah saat turun
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 shadow-xl transition-all duration-300 ${
          isScrolled 
          ? "bg-white/70 backdrop-blur-lg py-1.5" 
          : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className="relative px-6 py-2 text-sm font-medium transition-colors"
          >
            {/* Teks Link */}
            <span className={`relative z-10 transition-colors duration-300 ${
              active === item.name ? "text-white" : "text-gray-600 hover:text-black"
            }`}>
              {item.name}
            </span>

            {/* Pill Merah (Hanya muncul di item aktif) */}
            {active === item.name && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 bg-mun-red rounded-full shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}

```

---

### Penjelasan Detail Teknis:

* **`fixed top-6 inset-x-0`**: Membuat navbar melayang 24px dari atas layar dan berada tepat di tengah.
* **`backdrop-blur-lg`**: Memberikan efek kaca transparan (*frosted glass*) sehingga saat melewati foto hero yang gelap, navbar tetap terlihat elegan.
* **`layoutId="nav-active"`**: Ini adalah fitur ajaib dari `framer-motion`. Saat Anda mengklik "About", pill merahnya tidak hanya "muncul", tapi akan **bergeser** (animasi *slide*) dari posisi "Home" ke "About" secara mulus.
* **Responsive Pill**: Padding `px-6` memastikan area klik cukup luas dan bentuk kapsulnya proporsional dengan desain yang Anda buat.

### Tips untuk Pengembangan:

Karena Anda sedang mengerjakan proyek ini secara serius, pastikan warna `mun-red` sudah terdaftar di `tailwind.config.ts` seperti yang kita buat sebelumnya agar `bg-mun-red` bisa terbaca.

Bagaimana, Mar? Apakah transisi pill-nya sudah sesuai dengan ekspektasi desain Anda, atau ingin saya tambahkan menu *hamburger* untuk tampilan mobile?