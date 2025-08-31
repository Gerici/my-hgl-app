"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, Zap, Calendar, Beaker, Globe } from "lucide-react";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const benefits = [
    {
      title: "Maggiore Resa",
      description: "+30% di produzione rispetto ai metodi tradizionali",
      icon: <Leaf size={20} className="text-[var(--primary-green)]" />
    },
    {
      title: "Risparmio Idrico",
      description: "-90% di consumo d'acqua",
      icon: <Droplets size={20} className="text-[var(--accent-blue)]" />
    },
    {
      title: "Zero Pesticidi",
      description: "Coltivazione 100% naturale e controllata",
      icon: <Zap size={20} className="text-amber-500" />
    },
    {
      title: "Crescita Continua",
      description: "Produzione 365 giorni all'anno",
      icon: <Calendar size={20} className="text-purple-500" />
    },
    {
      title: "Nutrienti Ottimali",
      description: "Controllo preciso della nutrizione",
      icon: <Beaker size={20} className="text-teal-500" />
    },
    {
      title: "Sostenibilità",
      description: "Riduzione dell'impronta ecologica",
      icon: <Globe size={20} className="text-[var(--primary-green)]" />
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
    <section ref={ref} className="bg-white py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            I Vantaggi dell'<span className="text-[var(--primary-green)]">Idroponica</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Tecnologie avanzate per un'agricoltura sostenibile ed efficiente
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-6 bg-[var(--light-beige)]/50 rounded-lg border border-gray-100 hover:border-[var(--primary-green)]/20 transition-colors group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-100 group-hover:border-[var(--primary-green)]/30 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2 group-hover:text-[var(--primary-green)] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;