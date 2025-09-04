"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Leaf, Users } from "lucide-react";

const BrandMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const values = [
    {
      icon: <Target size={24} className="text-[var(--primary-green)]" />,
      title: "Missione",
      description: "Rivoluzionare l'agricoltura attraverso tecnologie idroponiche avanzate e sostenibili"
    },
    {
      icon: <Leaf size={24} className="text-[var(--primary-green)]" />,
      title: "Visione",
      description: "Un futuro dove il cibo sia accessibile, nutriente e rispettoso dell'ambiente"
    },
    {
      icon: <Users size={24} className="text-[var(--primary-green)]" />,
      title: "Valori",
      description: "Innovazione, sostenibilità, qualità e trasparenza in tutto ciò che facciamo"
    }
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
            Il Nostro <span className="text-[var(--primary-green)]">Impegno</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            HydroGreensLab nasce dalla passione per l'innovazione e il rispetto per la natura
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 font-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMission;