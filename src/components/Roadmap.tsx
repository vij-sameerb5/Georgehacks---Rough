import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    phase: "Registration",
    date: "February 8th 2025",
    time: "9:00 am",
    events: ["The Hackathon begins at 10:00 am!"]
  },
  {
    phase: "Hackathon Phase 1",
    date: "February 8th 2025",
    time: "10:00 am",
    events: [
      "Phase 1 Review at 12:30 pm",
      "Lunch Break at 2:00 pm",
      "Sponsor Addressal upto 5pm"
    ]
  },
  {
    phase: "Hackathon Phase 2",
    date: "February 8th 2025",
    time: "Evening",
    events: [
      "Phase 2 Review at 6:00 pm!",
      "Snacks at 6:30 pm",
      "Dinner at 9pm",
      "Musical Performance at 10pm"
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-[#4FD1C5] text-xl mb-4">ROADMAP</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HACKATHON TIMELINE
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 h-1 top-1/2 transform -translate-y-1/2 bg-[#4FD1C5]" />
          
          {/* Timeline nodes */}
          <div className="flex justify-between relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Node */}
                <div className="w-4 h-4 bg-[#4FD1C5] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                
                {/* Content box */}
                <div className="border border-[#4FD1C5] bg-black/50 backdrop-blur-sm p-6 rounded-lg w-80 mb-8">
                  <h4 className="text-xl font-bold text-[#4FD1C5] mb-2">{event.phase}</h4>
                  <div className="text-sm text-[#4FD1C5]/80 mb-4">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {event.events.map((item, i) => (
                      <li key={i} className="text-white/90">• {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}