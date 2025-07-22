import React, { useEffect, useState } from 'react';
import SolucaoSection from '../../components/solucaoSection/SolucaoSection';
import ProjectInfo from '../../components/projectInfo/ProjectInfo';
import styles from './SolucaoPage.module.css';

const SolucaoPage = () => {
  return (
    <div className={styles.solucaoContainer}>
        <SolucaoSection></SolucaoSection>
        <ProjectInfo></ProjectInfo>
    </div>
  )
}

export default SolucaoPage