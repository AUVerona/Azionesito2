import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getImagePath } from '../utils/paths'
import './AiutoMatricolePage.css'
import '../styles/globalPageStyles.css'

const AiutoMatricolePage: React.FC = () => {
  const pdfRef = useRef<HTMLIFrameElement>(null)

  // Disabilita il menu contestuale per scoraggiare il download
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (pdfRef.current && pdfRef.current.contains(e.target as Node)) {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handler)
    return () => document.removeEventListener('contextmenu', handler)
  }, [])

  return (
    <div className="aiuto-matricole-page global-page-layout">
      <Navbar />
      <main>
        <div className="container global-page-container">
          <div className="pdf-wrapper">
            <iframe
              ref={pdfRef}
              className="pdf-frame"
              src={`${getImagePath('ILMANUALE.pdf')}#toolbar=0&navpanes=0&scrollbar=1&view=Fit&zoom=page-fit`}
              title="Manuale Matricole"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AiutoMatricolePage
