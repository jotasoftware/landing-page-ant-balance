import './App.css'
import React, { useEffect, useState } from 'react'
import Menu from './components/menu/Menu'
import MainPage from './pages/MainPage/MainPage'
import ProblemaPage from './pages/ProblemaPage/ProblemaPage'
import SolucaoPage from './pages/SolucaoPage/SolucaoPage'
import TecnologiasPage from './pages/TecnologiasPage/TecnologiasPage'
import FrontendPage from './pages/FrontendPage/FrontendPage'

const App = () => {
  const [currentSection, setCurrentSection] = useState('main')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'problema', 'solucao', 'frontend', 'backend']
      for (let id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Menu currentSection={currentSection} />
      <div id="main"><MainPage /></div>
      <div id="problema"><ProblemaPage /></div>
      <div id="solucao"><SolucaoPage /></div>
      <div id="frontend"><FrontendPage /></div>
      {/* <div id="backend"><TecnologiasPage /></div> */}
    </>
  )
}

export default App
