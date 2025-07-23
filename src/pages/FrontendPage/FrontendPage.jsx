import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SolucaoSection from '../../components/solucaoSection/SolucaoSection';
import ProjectInfo from '../../components/projectInfo/ProjectInfo';
import styles from './FrontendPage.module.css';
import InfoFront from '../../components/infoFront/InfoFront';
import CardsFront from '../../components/cardsFront/CardsFront';
import ArquiteturaFront from '../../components/arquiteturaFront/ArquiteturaFront';

const FrontendPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div className={styles.frontendContainer}>
      <InfoFront />

      <motion.div
        ref={ref}
        className={styles.cardsMap}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

        <CardsFront img={'img01.png'} video={'grav1.mov'} text={"Estado incial"} />
        <CardsFront img={'img02.png'} video={'grav02.mov'} text={"Feedback imediato"} />
        <CardsFront img={'img03.png'} video={'grav03.mov'} text={"Loading visuais"} />
        <CardsFront img={'img04.png'} video={'grav04.mov'} text={"Sistema que se adapta"} />
      </motion.div>

      <ArquiteturaFront />
    </div>
  );
};

export default FrontendPage;
