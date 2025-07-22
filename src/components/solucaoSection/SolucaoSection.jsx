import React from 'react'
import styles from './SolucaoSection.module.css';

const SolucaoSection = () => {
  return (
    <div className={styles.solucaoContainer}>
        <div className={styles.textContainer}>
            <h1>Solução</h1>
            <p>Um app moderno e responsivo que permite ao usuário ter todo seu controle a um clique de distância, de qualquer dispositivo.</p>
            <div className={styles.saibaMaisContainer}>
                <a href="google.com">Ant Balance</a>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <img src="imgsolucao.svg" alt="" />
        </div>
    </div>
  )
}

export default SolucaoSection