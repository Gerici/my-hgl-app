"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Logo Minimal */}
          <Link href="/" className="flex items-center">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-[var(--primary-green)] to-[var(--accent-blue)] rounded-lg flex items-center justify-center shadow-sm"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 64 64" className="w-6 h-6 text-white">
                <path d="M32 8 C18 20, 18 36, 32 48 C46 36, 46 20, 32 8 Z" fill="currentColor"/>
                <path d="M32 18 C36 16, 42 20, 44 26 C42 32, 36 30, 32 28 Z" fill="#A7F3D0"/>
              </svg>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Tecnologia', 'Prodotti', 'Missione', 'Contatti'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[var(--primary-green)] transition-colors text-sm font-light relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--primary-green)] transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Cart and Auth - Minimal */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-[var(--primary-green)] transition-colors relative"
            >
              <ShoppingCart size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors px-3 py-1 rounded-lg border border-[var(--primary-green)]/30 hover:border-[var(--primary-green)]"
            >
              Accedi
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Navigation - Minimal */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-100"
            >
              <nav className="py-4 space-y-1">
                {['Home', 'Tecnologia', 'Prodotti', 'Missione', 'Contatti'].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                      className="block py-3 px-6 text-gray-600 hover:text-[var(--primary-green)] hover:bg-[var(--light-green)]/30 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;