"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", emoji: "🏡" },
    { label: "Tecnologia", emoji: "💧" },
    { label: "Prodotti", emoji: "🌱" },
    { label: "Missione", emoji: "🚀" },
    { label: "Contatti", emoji: "✉️" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md py-2"
          : "bg-white/70 backdrop-blur-md border-b border-gray-100 py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-12 w-auto relative group"
          >
            <Image
            src="/hgl_logo.svg"
            alt="HydroGreensLab"
            width={160}
            height={50}
            className="w-[220px] h-auto"   // <— forzato da Tailwind
            priority
            />
{/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <Link
                href={`/${item.label === "Home" ? "" : item.label.toLowerCase()}`}
                className="text-gray-700 hover:text-[var(--primary-green)] text-[15px] font-medium relative group tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--primary-green)] transition-all group-hover:w-full"></span>
              </Link>
              {/* Emoji hover */}
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-7 left-1/2 -translate-x-1/2 text-lg"
              >
                {item.emoji}
              </motion.span>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Carrello"
            className="p-2 text-gray-600 hover:text-[var(--primary-green)] relative"
          >
            <ShoppingCart size={22} />
            <motion.span
              key="cart-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute -top-1.5 -right-1.5 bg-[var(--primary-green)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md"
            >
              2
            </motion.span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-white bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition-colors px-5 py-2 rounded-lg shadow-md font-medium"
          >
            Accedi
          </motion.button>
        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Menu fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button
              aria-label="Chiudi menu"
              className="absolute top-6 right-6 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={30} />
            </button>
            {navLinks.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${item.label === "Home" ? "" : item.label.toLowerCase()}`}
                  className="text-2xl font-semibold text-gray-700 hover:text-[var(--primary-green)] flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.emoji}</span> {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
