import SolucaoSection from '../../components/solucaoSection/SolucaoSection';
import ProjectInfo from '../../components/projectInfo/ProjectInfo';
import styles from './FrontendPage.module.css';
import InfoFront from '../../components/infoFront/InfoFront';
import CardsFront from '../../components/cardsFront/CardsFront';
import ArquiteturaFront from '../../components/arquiteturaFront/ArquiteturaFront';

const FrontendPage = () => {
  return (
    <div className={styles.frontendContainer}>
        <InfoFront></InfoFront>
        <div className={styles.cardsMap}>
          <CardsFront></CardsFront>
          <CardsFront></CardsFront>
          <CardsFront></CardsFront>
          <CardsFront></CardsFront>
        </div>
        <ArquiteturaFront></ArquiteturaFront>
    </div>
  )
}

export default FrontendPage