import React from 'react'
import styles from './InfoFront.module.css';

const InfoFront = () => {
  return (
    <div className={styles.titleContainer}>
        <div className={styles.textContainer}>
            <h1>Frontend: Muito além da interface</h1>
            <p>O frontend é onde a lógica vira experiência.</p>
        </div>
    </div>
  )
}

export default InfoFront