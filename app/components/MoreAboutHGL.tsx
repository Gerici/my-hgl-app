"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Award, Clock } from "lucide-react";

const MoreAboutHGL = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { icon: <Users size={24} />, value: "1000+", label: "Clienti Soddisfatti" },
    { icon: <Globe size={24} />, value: "15+", label: "Regioni Coperte" },
    { icon: <Award size={24} />, value: "3", label: "Premi Ricevuti" },
    { icon: <Clock size={24} />, value: "24h", label: "Consegna Rapida" }
  ];

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Numeri che <span className="text-[var(--primary-green)]">Contano</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            L'impatto positivo della nostra innovazione idroponica
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-light text-[var(--primary-green)] mb-2">{stat.value}</div>
              <p className="text-gray-600 font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAboutHGL;