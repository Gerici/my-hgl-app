"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const MoreHydroponic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const topics = [
    {
      title: "Tecnologie Avanzate",
      description: "Sistemi idroponici all'avanguardia e controlli automatizzati"
    },
    {
      title: "Sostenibilità Ambientale",
      description: "Impatto ridotto e consumo responsabile delle risorse"
    },
    {
      title: "Ricerca e Sviluppo",
      description: "Innovazione continua per migliorare efficienza e qualità"
    }
  ];

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
            Oltre l'<span className="text-[var(--primary-green)]">Idroponica</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Scopri tutto quello che c'è da sapere sulla coltivazione del futuro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100"
            >
              <h3 className="text-xl font-light text-gray-800 mb-4">{topic.title}</h3>
              <p className="text-gray-600 font-light mb-4">{topic.description}</p>
              <button className="text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors text-sm font-light flex items-center">
                <span>Approfondisci</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="inline-flex items-center bg-[var(--primary-green)] text-white px-6 py-3 rounded-lg hover:bg-[var(--dark-green)] transition-colors">
            <BookOpen size={18} className="mr-2" />
            <span>Scopri Tutto sull'Idroponica</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreHydroponic;