"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BookOpen, ChefHat, Droplets, ArrowRight } from "lucide-react";

const DocsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const resources = [
    {
      icon: <BookOpen size={20} className="text-[var(--primary-green)]" />,
      title: "Guide all'Idroponica",
      description: "Tutto quello che devi sapere sulla coltivazione idroponica",
      link: "/blog/idroponica"
    },
    {
      icon: <ChefHat size={20} className="text-amber-500" />,
      title: "Ricette con Microgreens",
      description: "Idee creative per utilizzare i microgreens in cucina",
      link: "/blog/ricette"
    },
    {
      icon: <Droplets size={20} className="text-[var(--accent-blue)]" />,
      title: "Tecniche di Coltivazione",
      description: "Consigli pratici per coltivare in casa",
      link: "/blog/tecniche"
    }
  ];

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
            Risorse e <span className="text-[var(--primary-green)]">Documentazione</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Scopri il mondo dell'idroponica attraverso le nostre guide e risorse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--primary-green)]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[var(--light-green)] rounded-lg flex items-center justify-center mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">{resource.title}</h3>
              <p className="text-gray-600 font-light mb-6">{resource.description}</p>
              <Link 
                href={resource.link}
                className="text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors text-sm font-light flex items-center"
              >
                <span>Esplora</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center bg-[var(--primary-green)] text-white px-6 py-3 rounded-lg hover:bg-[var(--dark-green)] transition-colors"
          >
            <BookOpen size={18} className="mr-2" />
            <span>Vedi Tutti gli Articoli</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DocsSection;