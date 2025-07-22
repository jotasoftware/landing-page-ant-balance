import React, { useEffect, useState } from 'react';
import TitleSection from '../../components/titleSection/TitleSection';
import styles from './MainPage.module.css';
import ProjectNames from '../../components/projectNames/ProjectNames';

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
        <TitleSection></TitleSection>
        <ProjectNames></ProjectNames>
    </div>
  )
}

export default MainPage