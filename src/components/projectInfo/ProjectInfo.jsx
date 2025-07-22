import React from 'react'
import styles from './ProjectInfo.module.css';
import { IoLogoReact } from "react-icons/io5";

import { SiSpringboot } from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

const ProjectInfo = () => {
  return (
    <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}><IoLogoReact size={22} fill={'white'}></IoLogoReact></div>
          <div className={styles.infoText}>
            <h5>ReactJs</h5>
            <p>Visualização</p>
          </div>
        </div>
        <span className={styles.infoDiv}></span>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}><SiSpringboot size={22} fill={'white'}></SiSpringboot></div>
          <div className={styles.infoText}>
            <h5>Spring Boot</h5>
            <p>Microserviços</p>
          </div>
        </div>
        <span className={styles.infoDiv}></span>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}><BiLogoPostgresql size={22} fill={'white'}></BiLogoPostgresql></div>
          <div className={styles.infoText}>
            <h5>Postgres</h5>
            <p>Banco de dados</p>
          </div>
        </div>
    </div>
  )
}

export default ProjectInfo