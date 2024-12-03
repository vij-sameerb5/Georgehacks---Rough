import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  {
    name: "Children's National Hospital",
    logo: "https://example.com/childrens-national-logo.png"
  },
  {
    name: "The George Washington University",
    logo: "https://example.com/gwu-logo.png"
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4FD1C5] mb-4">
            Our Sponsors
          </h2>
        </motion.div>

        <div className="flex justify-center items-center gap-16 flex-wrap">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="w-64 h-64 relative"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}