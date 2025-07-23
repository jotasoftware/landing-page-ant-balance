import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Diagrama from '../diagrama/Diagarama';
import styles from './ArquiteturaFront.module.css';

const ArquiteturaFront = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={styles.arquiteturaContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1>Arquitetura</h1>
      <Diagrama />
      <img src="arquiteturafront.svg" alt="Diagrama de arquitetura" />
    </motion.div>
  );
};

export default ArquiteturaFront;