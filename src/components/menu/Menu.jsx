import React from 'react'
import styles from './Menu.module.css';

const Menu = ({ currentSection }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.imgContainer}>
        <img src="./logoazul.svg" alt="" />
      </div>
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
          FrontEnd
        </a>
        <a 
          href="#backend" 
          className={`${styles.menuItemLink} ${currentSection === 'backend' ? styles.active : ''}`}
        >
          BackEnd
        </a>
      </div>
      <div className={styles.linkPage}>
        <a href="https://google.com">ÁREA DO USUÁRIO</a>
      </div>
    </div>
  )
}

export default Menu
