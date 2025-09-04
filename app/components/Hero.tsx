"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sprout, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[var(--light-green)]/20 to-[var(--accent-blue)]/10">
      {/* Gradient blob sinistro */}
      <motion.div
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-[var(--primary-green)]/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Gradient blob destro */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-[var(--accent-blue)]/20 rounded-full blur-[140px]"
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Colonna testo */}
        <div className="text-center md:text-left">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 text-sm text-[var(--primary-green)] bg-[var(--light-green)]/40 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Sprout size={16} />
            <span>INNOVAZIONE IDROPONICA</span>
          </motion.span>

          {/* Titolo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extralight mt-6 mb-6 leading-tight tracking-tight"
          >
            Cresci il tuo <span className="text-[var(--primary-green)]">benessere</span><br />
            con i nostri <span className="text-[var(--accent-blue)]">microgreens</span>
          </motion.h1>

          {/* Descrizione */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 font-light max-w-lg mb-10"
          >
            Coltivati con tecniche idroponiche avanzate: più sapore, più nutrienti, più sostenibilità. 
            Direttamente dalle nostre colture alla tua tavola.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              href="/prodotti"
              className="px-8 py-4 rounded-lg text-sm font-light bg-[var(--primary-green)] text-white hover:bg-[var(--dark-green)] shadow-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Scopri i Prodotti</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/missione"
              className="px-8 py-4 rounded-lg text-sm font-light border border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--light-green)]/40 backdrop-blur-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Leaf size={16} />
              <span>La Nostra Missione</span>
            </Link>
          </motion.div>
        </div>

        {/* Colonna immagine con parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden"
          >
            <Image
              src="/hero-microgreens.png" // 👉 sostituisci con la tua immagine
              alt="Microgreens freschi"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--primary-green)] text-sm font-light flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 border-b-2 border-r-2 border-[var(--primary-green)] rotate-45 mb-2"
        />
        <span>Scorri</span>
      </motion.div>
    </section>
  );
};

export default Hero;
