"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, Sprout, Leaf, Trees } from "lucide-react";

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      id: 1,
      name: "Microgreens",
      description: "Coltivati con tecnologia avanzata per massimizzare nutrienti e sapore",
      icon: <Sprout size={24} className="text-[var(--primary-green)]" />,
      count: "3 varietà"
    },
    {
      id: 2,
      name: "Erbe Aromatiche",
      description: "Aromi puri e intensi grazie all'ambiente controllato",
      icon: <Leaf size={24} className="text-[var(--primary-green)]" />,
      count: "5 varietà"
    },
    {
      id: 3,
      name: "Lattughe",
      description: "Croccantezza e freschezza garantite tutto l'anno",
      icon: <Trees size={24} className="text-[var(--primary-green)]" />,
      count: "2 varietà"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
    <section ref={ref} className="bg-gradient-to-b from-[var(--light-beige)] to-white py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Le Nostre <span className="text-[var(--primary-green)]">Categorie</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Scopri la varietà di prodotti coltivati con tecniche all'avanguardia
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[var(--primary-green)]/30 transition-colors group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--light-green)] rounded-lg mb-6 group-hover:bg-[var(--primary-green)]/10 transition-colors">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-[var(--primary-green)] transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm font-light leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-gray-500 font-light">{category.count}</span>
                <Link 
                  href={`/prodotti/${category.name.toLowerCase()}`}
                  className="text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors text-sm font-light flex items-center"
                >
                  Scopri
                  <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;