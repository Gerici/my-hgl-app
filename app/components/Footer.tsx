"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-16 overflow-hidden"
    >
      {/* Parallax Background Shapes */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -top-10 left-1/3 w-40 h-40 bg-[var(--light-green)]/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute bottom-0 right-1/4 w-56 h-56 bg-[var(--accent-blue)]/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              🌱 HydroGreensLab
            </h2>
            <p className="text-sm text-gray-600 mt-3 font-light">
              Innovazione idroponica per un futuro sostenibile.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[var(--primary-green)] hover:text-white transition"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium text-gray-800 mb-3">Navigazione</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Home", "Tecnologia", "Prodotti", "Missione", "Contatti"].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[var(--primary-green)] transition"
                  >
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
          >
            <h3 className="font-medium text-gray-800 mb-3">Prodotti</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Microgreens", "Erbe Aromatiche", "Lattughe"].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link
                    href={`/prodotti/${item.toLowerCase()}`}
                    className="hover:text-[var(--primary-green)] transition"
                  >
                    {item}
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
          >
            <h3 className="font-medium text-gray-800 mb-3">Contatti</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                info@hydrogreenslab.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                +39 012 345 6789
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                Via delle Colture 123, Italia
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>
            © {currentYear} HydroGreensLab 🌿 | Made with 💚 for a greener
            future.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
