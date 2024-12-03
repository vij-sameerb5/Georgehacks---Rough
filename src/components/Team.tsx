import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Sameer Shaik",
    role: "Technical Advisor",
    image: "https://example.com/sameer-shaik.jpg" // First image
  },
  {
    name: "Vaibhav Vemula",
    role: "Developer Relations",
    image: "https://example.com/vaibhav-vemula.jpg" // Second image
  },
  {
    name: "Eugenie Pflieger",
    role: "Director",
    image: "https://example.com/eugenie-pflieger.jpg" // Third image
  },
  {
    name: "Sofiia Khugaeva",
    role: "Design Lead",
    image: "https://example.com/sofiia-khugaeva.jpg" // Fourth image
  },
  // ... rest of the team members
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="team" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#4FD1C5] text-xl mb-2 block">2024-2025</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4FD1C5] mb-4">
            GEORGE HACKS TEAM
          </h2>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-hidden whitespace-nowrap pb-8"
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <motion.div
              key={index}
              className="flex-none w-72 relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 w-72 overflow-hidden rounded-xl border-2 border-[#4FD1C5]/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#4FD1C5]">{member.role}</p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-[#4FD1C5] hover:text-[#4FD1C5]/80">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-[#4FD1C5] hover:text-[#4FD1C5]/80">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-[#4FD1C5] hover:text-[#4FD1C5]/80">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}