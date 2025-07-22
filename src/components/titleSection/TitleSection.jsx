import React from 'react'
import styles from './TitleSection.module.css';

const TitleSection = () => {
  return (
    <div className={styles.titleContainer}>
        <div className={styles.textContainer}>
            <h1>Controle seus gastos</h1>
            <p>Sistema de controle de gastos rápido e eficiente, seja para uso pessoal ou para sua empresa!</p>
            <div className={styles.saibaMaisContainer}>
                <a href="google.com">Saiba mais</a>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <img src="imgprincipal.svg" alt="" />
        </div>
    </div>
  )
}

export default TitleSection