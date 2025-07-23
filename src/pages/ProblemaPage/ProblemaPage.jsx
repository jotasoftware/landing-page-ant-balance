import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ProblemaPage.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";

const ProblemaPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const problemas = [
    'Quase metade dos brasileiros não controlam o proprio orçamento',
    'Apenas 33% planejam o mês com antecedência',
    '60% relatam dificuldade em manter o controle financeiro'
  ];

  return (
    <motion.div
      ref={ref}
      className={styles.problemaContainer}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.imgContainer}>
        <img src="imgproblema.svg" alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1>Problema</h1>
        <p>A maioria das pessoas não sabe exatamente onde vai parar o dinheiro no fim do mês.</p>

        <div className={styles.problemasDiv}>
          {problemas.map((problema, index) => (
            <div key={index} className={styles.problemaItem}>
              <div className={styles.problemaNumber}>
                <IoCheckmarkOutline />
              </div>
              <div className={styles.problemaText}>
                {problema}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProblemaPage;
