import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Diagrama.module.css';

const steps = [
  {
    title: 'Pages / Componentes',
    desc: 'Botões, formulários e páginas visíveis ao usuário.',
    color: '#4f46e5',
  },
  {
    title: 'Estado (Context)',
    desc: 'Gerencia dados ativos como gastos e usuários.',
    color: '#10b981',
  },
  {
    title: 'API / Backend',
    desc: 'Comunica com o servidor usando Axios.',
    color: '#f59e0b',
  },
];

export default function Diagrama() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={styles.card}
          style={{ backgroundColor: step.color }}
          initial={{ opacity: 0, y: 60, rotate: -4 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: activeIndex === index ? 1.08 : 1,
          }}
          whileHover={{
            scale: 1.06,
            y: -10,
            boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
            rotate: -1,
          }}
          whileTap={{ scale: 0.95, rotate: 2 }}
          transition={{
            delay: index * 0.2,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
