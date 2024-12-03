import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev === 10) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 10;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="text-[#4FD1C5] text-8xl font-bold mb-8">{count}</div>
        <div className="w-64 h-2 bg-[#4FD1C5]/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#4FD1C5]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}