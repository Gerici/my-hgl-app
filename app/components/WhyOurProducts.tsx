"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Award, Clock, Heart } from "lucide-react";

const WhyOurProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: <Award size={20} className="text-amber-500" />,
      title: "Qualità Premium",
      description: "Selezione delle migliori varietà e controllo qualità rigoroso"
    },
    {
      icon: <Clock size={20} className="text-[var(--accent-blue)]" />,
      title: "Freschezza Garantita",
      description: "Raccolta giornaliera e consegna in 24 ore"
    },
    {
      icon: <Heart size={20} className="text-red-400" />,
      title: "100% Naturale",
      description: "Coltivazione senza pesticidi né additivi chimici"
    },
    {
      icon: <Check size={20} className="text-[var(--primary-green)]" />,
      title: "Tracciabilità",
      description: "Provenienza certa e processo trasparente"
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
            Perché Scegliere i <span className="text-[var(--primary-green)]">Nostri Prodotti</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Eccellenza nella coltivazione idroponica che fa la differenza in ogni prodotto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOurProducts;