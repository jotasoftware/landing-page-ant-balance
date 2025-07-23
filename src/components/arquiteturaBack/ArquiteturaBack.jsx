import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ArquiteturaBack.module.css';

const ArquiteturaBack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3});

  return (
    <motion.div
      ref={ref}
      className={styles.arquiteturaContainer}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>Arquitetura</h1>
      <img src="arquiteturabackend.svg" alt="" />
    </motion.div>
  );
};

export default ArquiteturaBack;
