"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white border-t border-gray-100 py-16"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-green)] to-[var(--accent-blue)] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-6 h-6 text-white">
                  <path d="M32 8 C18 20, 18 36, 32 48 C46 36, 46 20, 32 8 Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-light text-gray-800">HydroGreensLab</span>
            </div>
            <p className="text-sm text-gray-600 mb-6 font-light">
              Innovazione idroponica per un futuro sostenibile
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[var(--light-green)] hover:text-[var(--primary-green)] transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-gray-800 mb-4">Navigazione</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Home', 'Tecnologia', 'Prodotti', 'Missione', 'Contatti'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-[var(--primary-green)] transition-colors font-light">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-gray-800 mb-4">Prodotti</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Microgreens', 'Erbe Aromatiche', 'Lattughe'].map((product, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <Link href={`/prodotti/${product.toLowerCase()}`} className="hover:text-[var(--primary-green)] transition-colors font-light">
                    {product}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-gray-800 mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <motion.li className="flex items-start" whileHover={{ x: 2 }}>
                <Mail size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-light">info@hydrogreenslab.com</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 2 }}>
                <Phone size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-light">+39 012 345 6789</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 2 }}>
                <MapPin size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-light">Via delle Colture 123, Italia</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-light">© {currentYear} HydroGreensLab. Tutti i diritti riservati.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;