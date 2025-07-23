import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SolucaoSection from '../../components/solucaoSection/SolucaoSection';
import ProjectInfo from '../../components/projectInfo/ProjectInfo';
import styles from './SolucaoPage.module.css';

const SolucaoPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={styles.solucaoContainer}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SolucaoSection />
      <ProjectInfo />
    </motion.div>
  );
};

export default SolucaoPage;
