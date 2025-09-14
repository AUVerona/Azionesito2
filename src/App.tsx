import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import PrivacyLock from './components/PrivacyLock'
import HomePage from './pages/HomePage_fixed'
import ChiSiamoPage from './pages/ChiSiamoPage'
import UniscitiPage from './pages/UniscitiPage'
import AiutoMatricolePage from './pages/AiutoMatricolePage'
import ContattiPage from './pages/ContattiPage'
import DonazioniPage from './pages/DonazioniPage'
import StatutoPage from './pages/StatutoPage'
import PrivacyPage from './pages/PrivacyPage'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="App">
      <ScrollToTop />
      <PrivacyLock />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/unisciti" element={<UniscitiPage />} />
        <Route path="/aiuto-matricole" element={<AiutoMatricolePage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="/donazioni" element={<DonazioniPage />} />
        <Route path="/statuto" element={<StatutoPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  )
}

export default App
