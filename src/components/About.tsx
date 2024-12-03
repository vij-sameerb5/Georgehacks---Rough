import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4FD1C5] mb-4">
            About GeorgeHacks
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 text-lg text-[#4FD1C5]/90"
        >
          <p>
            George Hacks is George Washington University's legendary 24-hour hackathon, 
            happening February 8-9. Ready to pull an all-nighter fueled by caffeine and ambition? 
            This is your chance to flex your creativity, build crazy-cool solutions, and solve 
            real-world problems—all before your next coffee break.
          </p>

          <p>
            Think you can outsmart the competition and impress our judges? Teams will be selected 
            based on their problem statements, so don't just think outside the box—obliterate it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#4FD1C5]/5 p-6 rounded-lg border border-[#4FD1C5]/20">
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li>📅 Dates: February 8-9, 2025</li>
                <li>📍 Venue: SEH Building, George Washington University</li>
                <li>⏰ Time: 9:00 AM - 9:00 AM (24 hours)</li>
                <li>💰 Prize Pool: $6000</li>
              </ul>
            </div>

            <div className="bg-[#4FD1C5]/5 p-6 rounded-lg border border-[#4FD1C5]/20">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-2">
                <li>🚀 24 hours of intense innovation</li>
                <li>🤝 Network with industry professionals</li>
                <li>🏆 Compete for amazing prizes</li>
                <li>🎓 Learn from expert mentors</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-12 font-semibold">
            At the end of the 24-hour hackathon, teams will deploy their applications 
            and present them to judges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}