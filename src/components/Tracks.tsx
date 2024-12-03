import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Cpu, Lightbulb } from 'lucide-react';

const tracks = [
  {
    icon: Globe,
    name: "Sustainability",
    description: "Create solutions for environmental challenges",
    sdg: "SDG 13: Climate Action"
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Innovate in medical technology and patient care",
    sdg: "SDG 3: Good Health and Well-being"
  },
  {
    icon: Cpu,
    name: "AI & ML",
    description: "Develop intelligent solutions using AI/ML",
    sdg: "SDG 9: Industry, Innovation and Infrastructure"
  },
  {
    icon: Lightbulb,
    name: "Open Innovation",
    description: "Build anything that inspires you",
    sdg: "Any SDG"
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4FD1C5] mb-4">
            Tracks & Themes
          </h2>
          <p className="text-xl text-[#4FD1C5]/80">
            Aligned with UN's Sustainable Development Goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 30px rgba(79,209,197,0.3)"
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#4FD1C5]/5 rounded-xl p-6 border border-[#4FD1C5]/20
                         hover:bg-[#4FD1C5]/10 transition-all duration-300"
            >
              <track.icon size={40} className="mb-4 text-[#4FD1C5]" />
              <h3 className="text-xl font-semibold mb-2">{track.name}</h3>
              <p className="text-[#4FD1C5]/80 mb-4">{track.description}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#4FD1C5]/10 text-sm">
                {track.sdg}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}