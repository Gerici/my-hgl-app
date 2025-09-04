"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
            Contattaci
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Siamo qui per rispondere a tutte le tue domande sull'idroponica e i nostri prodotti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-light text-gray-800 mb-6">Informazioni di Contatto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={20} className="text-[var(--primary-green)] mr-4 mt-1" />
                <div>
                  <p className="font-light text-gray-800">Email</p>
                  <p className="text-gray-600">info@hydrogreenslab.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="text-[var(--primary-green)] mr-4 mt-1" />
                <div>
                  <p className="font-light text-gray-800">Telefono</p>
                  <p className="text-gray-600">+39 012 345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-[var(--primary-green)] mr-4 mt-1" />
                <div>
                  <p className="font-light text-gray-800">Indirizzo</p>
                  <p className="text-gray-600">Via delle Colture 123, Italia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-light text-gray-800 mb-6">Inviaci un Messaggio</h3>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nome e Cognome"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[var(--primary-green)] focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[var(--primary-green)] focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Il tuo messaggio"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[var(--primary-green)] focus:outline-none transition-colors"
                />
              </div>
              
              <button 
                type="submit"
                className="bg-[var(--primary-green)] text-white px-6 py-3 rounded-lg hover:bg-[var(--dark-green)] transition-colors flex items-center"
              >
                <Send size={18} className="mr-2" />
                <span>Invia Messaggio</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;