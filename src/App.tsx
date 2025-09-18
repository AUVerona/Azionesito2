import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import PrivacyLock from './components/PrivacyLock'
import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage_fixed'))
const ChiSiamoPage = lazy(() => import('./pages/ChiSiamoPage'))
const UniscitiPage = lazy(() => import('./pages/UniscitiPage'))
const AiutoMatricolePage = lazy(() => import('./pages/AiutoMatricolePage'))
const ContattiPage = lazy(() => import('./pages/ContattiPage'))
const DonazioniPage = lazy(() => import('./pages/DonazioniPage'))
const StatutoPage = lazy(() => import('./pages/StatutoPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const AttivitaPage = lazy(() => import('./pages/AttivitaPage'))
const RappresentanzaPage = lazy(() => import('./pages/RappresentanzaPage'))
const InfoPage = lazy(() => import('./pages/InfoPage'))
import './App.css'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <PrivacyLock />
      <Suspense fallback={<LoadingScreen />}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/attivita" element={<AttivitaPage />} />
          <Route path="/rappresentanza" element={<RappresentanzaPage />} />
          <Route path="/unisciti" element={<UniscitiPage />} />
          <Route path="/diventa-volontario" element={<UniscitiPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/aiuto-matricole" element={<AiutoMatricolePage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/donazioni" element={<DonazioniPage />} />
          <Route path="/statuto" element={<StatutoPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
