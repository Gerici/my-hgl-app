"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Target, Users, Globe, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "100%", label: "Sostenibile", icon: <Target size={16} className="text-[var(--primary-green)]" /> },
    { value: "0%", label: "Pesticidi", icon: <Check size={16} className="text-[var(--accent-blue)]" /> },
    { value: "365", label: "Giorni/Anno", icon: <Globe size={16} className="text-amber-500" /> }
  ];

  const benefits = [
    "Coltivazione 100% controllata in ambiente sterile",
    "Raccolta giornaliera per massima freschezza",
    "Consegna entro 24 ore dalla raccolta",
    "Imballaggi sostenibili e riciclabili"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.span 
              className="text-xs text-[var(--primary-green)] tracking-wider mb-6 inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              LA NOSTRA MISSIONE
            </motion.span>

            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Innovazione <span className="text-[var(--primary-green)]">Sostenibile</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                In HydroGreensLab crediamo in un futuro dove l'agricoltura sia 
                sostenibile, efficiente e accessibile a tutti. La nostra missione 
                è rivoluzionare il modo in cui coltiviamo e consumiamo il cibo.
              </p>
              
              <p>
                Utilizzando tecniche idroponiche all'avanguardia, produciamo 
                microgreens, erbe aromatiche e lattughe con un impatto ambientale 
                minimo e valori nutrizionali massimi.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  whileHover={{ y: -2 }}
                >
                  <div className="text-2xl font-light text-[var(--primary-green)] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center space-x-1">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Main card */}
            <motion.div 
              className="bg-[var(--light-beige)] p-8 rounded-xl border border-gray-100"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[var(--primary-green)] rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-light text-gray-800">
                  Perché Sceglierci
                </h3>
              </div>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start p-3 rounded-lg bg-white border border-gray-100"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="w-6 h-6 bg-[var(--light-green)] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <Check size={12} className="text-[var(--primary-green)]" />
                    </div>
                    <span className="text-sm text-gray-600 font-light">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Award badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white border border-gray-100 px-3 py-2 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Award size={14} className="text-amber-500" />
                <span className="text-xs text-gray-600">Innovazione 2024</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;