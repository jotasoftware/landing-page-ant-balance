import React from 'react'
import styles from './ProjectNames.module.css';

const ProjectNames = () => {
  return (
    <div className={styles.nameContainer}>
        <div className={styles.nameItem}>
          Arion Teixeira
        </div>
        <span className={styles.separator}>|</span>
        <div className={styles.nameItem}>
          Caio Galassi
        </div>
        <span className={styles.separator}>|</span>
        <div className={styles.nameItem}>
          João Pedro Moreira
        </div>
        <span className={styles.separator}>|</span>
        <div className={styles.nameItem}>
          Rythielly Garcia
        </div>
        <span className={styles.separator}>|</span>
        <div className={styles.nameItem}>
          Vinicius Augusto
        </div>
    </div>
  )
}

export default ProjectNames