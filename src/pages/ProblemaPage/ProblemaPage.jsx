import React, { useEffect, useState } from 'react';
import styles from './ProblemaPage.module.css';
import { IoCheckmarkOutline } from "react-icons/io5"

const ProblemaPage = () => {

  const problemas = ['Quase metade dos brasileiros não controlam o proprio orçamento', 'Apenas 33% planejam o mês com antecedência', '60% relatam dificuldade em manter o controle financeiro']
  return (
    <div className={styles.problemaContainer}>
        <div className={styles.imgContainer}>
            <img src="imgproblema.svg" alt="" />
        </div>
        <div className={styles.textContainer}>
            <h1>Problema</h1>
            <p>A maioria das pessoas não sabe exatamente onde vai parar o dinheiro no fim do mês.</p>

            <div className={styles.problemasDiv}>
              {problemas.map((problema, index) => (
                <div key={index} className={styles.problemaItem}>
                  <div className={styles.problemaNumber}>
                  <IoCheckmarkOutline></IoCheckmarkOutline>
                  </div>
                  <div className={styles.problemaText}>
                    {problema}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default ProblemaPage