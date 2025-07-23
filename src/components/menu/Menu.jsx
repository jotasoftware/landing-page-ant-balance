import React from 'react'
import styles from './Menu.module.css';

const Menu = ({ currentSection }) => {
  return (
    <div className={styles.menuContainer}>
      <a href='#' className={styles.imgContainer}>
        <img src="./logoazul.svg" alt="" />
      </a>
      <div className={styles.menuLinks}>
        <a 
          href="#problema" 
          className={`${styles.menuItemLink} ${currentSection === 'problema' ? styles.active : ''}`}
        >
          Problema
        </a>
        <a 
          href="#solucao" 
          className={`${styles.menuItemLink} ${currentSection === 'solucao' ? styles.active : ''}`}
        >
          Solução
        </a>
        <a 
          href="#frontend" 
          className={`${styles.menuItemLink} ${currentSection === 'frontend' ? styles.active : ''}`}
        >
          Front-end
        </a>
        <a 
          href="#backend" 
          className={`${styles.menuItemLink} ${currentSection === 'backend' ? styles.active : ''}`}
        >
          Back-end
        </a>
      </div>
      <div className={styles.linkPage}>
        <a href="http://localhost:5173/login" target={'_blank'}>ÁREA DO USUÁRIO</a>
      </div>
    </div>
  )
}

export default Menu
