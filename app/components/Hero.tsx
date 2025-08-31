"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-[var(--light-beige)]">
      {/* Sfondo con parallax minimale */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="minimalPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="var(--primary-green)" />
              <circle cx="60" cy="40" r="1" fill="var(--accent-blue)" />
              <circle cx="40" cy="70" r="1" fill="var(--primary-green)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#minimalPattern)" />
        </svg>
      </motion.div>

      {/* Contenuto principale */}
      <div className="container-custom text-center z-10 relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.span 
            className="text-xs font-light text-[var(--primary-green)] tracking-wider"
            whileHover={{ scale: 1.02 }}
          >
            INNOVAZIONE IDROPONICA
          </motion.span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity }}
        >
          <span className="text-gray-800">Hydro</span>
          <span className="text-[var(--primary-green)]">Greens</span>
          <span className="text-[var(--accent-blue)]">Lab</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity }}
        >
          Coltiviamo il futuro con tecnologie idroponiche avanzate. 
          Sostenibilità ed eccellenza in ogni prodotto.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ opacity }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/tecnologia" className="bg-[var(--primary-green)] text-white px-8 py-3 rounded-lg text-sm font-light flex items-center justify-center space-x-2 hover:bg-[var(--dark-green)] transition-colors">
              <span>Scopri la Tecnologia</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/prodotti" className="border border-[var(--primary-green)] text-[var(--primary-green)] px-8 py-3 rounded-lg text-sm font-light flex items-center justify-center space-x-2 hover:bg-[var(--light-green)] transition-colors">
              <span>I Nostri Prodotti</span>
              <Leaf size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicatore di scroll minimal */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <div className="w-4 h-4 border-r border-b border-[var(--primary-green)] transform rotate-45"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;