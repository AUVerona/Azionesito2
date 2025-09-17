import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globalPageStyles.css'
import '../styles/animations.css'

const AttivitaPage: React.FC = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom')) as HTMLElement[]
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <div className="global-page-layout">
      <Navbar />
      <main className="global-page-section">
        <div className="global-page-container">
          <h1 className="reveal-up fx">Le nostre attività</h1>
          <section className="global-content-section">
            <p className="reveal">
              La politica si fa, prima di tutto. E gli ambienti universitari si vivono. Perciò la militanza è per noi presenza costante nei corridoi e nelle aule al fianco degli universitari.
            </p>
            <p className="reveal reveal-delay-1">
              Vuol dire sacrificare pomeriggi rubati allo studio per comporre una grafica, presenziare a un banchetto o notti insonni per completare striscioni. Non v'è nessuna differenza tra militanti quando è il momento di agire, nessuno è esentato dal mettersi a disposizione del gruppo. Distribuiamo volantini d'inverno come d'estate: ci guida solo la volontà di metterci al servizio della città e della comunità studentesca.
            </p>
            <p className="reveal reveal-delay-2">
              Per noi fare militanza significa prenderci una responsabilità, con coscienza e passione. Scegliamo di metterci a disposizione dell'università e degli studenti, sempre con il sorriso, perché crediamo in qualcosa che va oltre le elezioni o i singoli voti. Militanza per noi è anche rappresentare i valori che ci uniscono come comunità e camminare insieme verso un futuro migliore.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AttivitaPage
