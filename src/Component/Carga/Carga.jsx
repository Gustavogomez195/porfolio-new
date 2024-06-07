
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
          <h1 className="text-4xl font-bold">Bienvenido</h1>
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
          <h1 className="text-4xl font-oswald tracking-wider ">Bienvenido</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
