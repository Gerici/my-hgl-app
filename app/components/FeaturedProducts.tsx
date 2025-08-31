"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ShoppingCart, Leaf, Star } from "lucide-react";

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const featuredProducts = [
    {
      id: 1,
      name: "Microgreen Pisello Foxy",
      category: "Microgreens",
      price: "€7,90",
      weight: "50g",
      description: "Sapore dolce e delicato, ricco di vitamine",
      icon: "🌱",
      rating: 4.8
    },
    {
      id: 2,
      name: "Nasturzio Empress",
      category: "Microgreens",
      price: "€8,50",
      weight: "40g",
      description: "Note pepate e leggermente piccanti",
      icon: "🌿",
      rating: 4.9
    },
    {
      id: 3,
      name: "Basilico Genovese",
      category: "Erbe Aromatiche",
      price: "€5,90",
      weight: "1 vaso",
      description: "Aroma intenso e inconfondibile",
      icon: "🍃",
      rating: 4.7
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-[var(--light-beige)] py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Prodotti in <span className="text-[var(--primary-green)]">Evidenza</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Scopri la selezione dei nostri prodotti coltivati con tecnologie all'avanguardia
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[var(--primary-green)]/30 transition-colors group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--light-green)] rounded-lg mb-6 group-hover:bg-[var(--primary-green)]/10 transition-colors">
                <span className="text-2xl">{product.icon}</span>
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs text-[var(--primary-green)] font-light mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-light text-gray-800 group-hover:text-[var(--primary-green)] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span className="text-lg font-light text-[var(--primary-green)]">
                  {product.price}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm font-light leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-gray-500 font-light">{product.weight}</span>
                <div className="flex items-center space-x-1">
                  <Star size={12} className="text-amber-400 fill-current" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>
              </div>
              
              <motion.button 
                className="w-full py-2 bg-[var(--primary-green)] text-white rounded-lg text-sm font-light flex items-center justify-center space-x-2 hover:bg-[var(--dark-green)] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={14} />
                <span>Aggiungi</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/prodotti" 
            className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors text-sm font-light"
          >
            <span>Scopri tutti i prodotti</span>
            <Leaf size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;