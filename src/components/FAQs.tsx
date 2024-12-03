import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "When and where is the hackathon?",
    answer: "The hackathon will take place at the SEH Building, George Washington University, on February 8-9, 2025."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation is free."
  },
  {
    question: "Do I need a team?",
    answer: "Teams can consist of 2-5 members."
  },
  {
    question: "Do I need any skills or prerequisites?",
    answer: "No prerequisites required; just bring your creativity and enthusiasm."
  },
  {
    question: "Why should I participate?",
    answer: "To innovate, network, and win exciting prizes while solving real-world problems."
  },
  {
    question: "Is the event open to everyone?",
    answer: "Yes, it is open to students from all backgrounds."
  },
  {
    question: "How are projects judged?",
    answer: "Judges will evaluate based on creativity, execution, and impact."
  },
  {
    question: "Have any questions?",
    answer: "Contact us at contact@georgehacks.com"
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4FD1C5] mb-4">
            Looking for Answers?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#4FD1C5]/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left
                           bg-[#4FD1C5]/5 hover:bg-[#4FD1C5]/10 transition-all duration-300"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#4FD1C5]" />
                ) : (
                  <ChevronDown className="text-[#4FD1C5]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#4FD1C5]/5"
                  >
                    <p className="p-6 text-[#4FD1C5]/90">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}