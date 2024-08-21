
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onComplete }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!startAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
        >
          <h1 className="font-poppin font-medium text-6xl text-black">Bienvenido</h1>
        </motion.div>
      )}
      {startAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={onComplete}
        >
          <h1 className="text-5xl font-medium font-poppin text-black  ">Bienvenido</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
