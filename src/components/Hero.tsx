import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="h-screen relative overflow-hidden" id="home">
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-[#4FD1C5] mb-4"
          >
            GeorgeHacks
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#4FD1C5]/80 mb-8"
          >
            February 8th - 9th, 2025
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#4FD1C5] text-black px-8 py-3 rounded-full text-lg font-semibold
                     hover:bg-[#4FD1C5]/90 transition-all duration-300
                     shadow-[0_0_15px_rgba(79,209,197,0.5)]
                     hover:shadow-[0_0_25px_rgba(79,209,197,0.8)]"
          >
            Register Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}