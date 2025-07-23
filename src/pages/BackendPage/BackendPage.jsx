import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ArquiteturaBack from '../../components/arquiteturaBack/ArquiteturaBack';
import styles from './BackendPage.module.css';

const BackendPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div className={styles.backendContainer}>
      <motion.div
        ref={ref}
        className={styles.backendDiv}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.textContainer}>
          <h1>Backend</h1>
          <p>Motor invisível por trás de tudo.</p>
        </div>
        <div className={styles.tecnologias}>
          <img src="imgbackend.svg" alt="" />
        </div>
      </motion.div>
      <ArquiteturaBack />
    </div>
  );
};

export default BackendPage;
