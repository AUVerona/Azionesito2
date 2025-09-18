import React from 'react'

interface Highlight {
  icon: string
  title: string
  description: string
}

const highlights: Highlight[] = [
  {
    icon: '�',
    title: 'PIÙ ALLOGGI PER GLI STUDENTI',
    description: 'Gli affitti non sono mai stati così alti e le città universitarie hanno smesso di essere a misura di studente. Vogliamo risposte sul tema del caro affitti che colpisce gli studenti fuorisede e un aumento degli alloggi destinati a residenze universitarie.'
  },
  {
    icon: '🚌',
    title: 'AGEVOLAZIONI SUI TRASPORTI',
    description: 'Vogliamo un sistema di trasporto pubblico efficiente ed accessibile a tutti gli studenti pendolari e fuori sede. Soprattutto tramite tariffe agevolate ottenute con convenzioni pensate per gli studenti universitari.'
  },
  {
    icon: '�️',
    title: 'POTENZIAMENTO INFRASTRUTTURE',
    description: 'L\'università necessita di infrastrutture all\'altezza delle esigenze anche degli studenti e della ricerca. Basta con le aule sovraffollate e spazi inadeguati. Vogliamo un piano di investimenti per atenei più accessibili e innovativi.'
  }
]

const ChiSiamo: React.FC = () => {
  return (
    <section className="chi-siamo" id="chi-siamo">
      <div className="chi-siamo-container">
        <h2>Chi Siamo</h2>
        <div className="chi-siamo-content">
          <div className="chi-siamo-text">
            <h3>Il nostro simbolo</h3>
            <div className="simbolo-item">
              <h4>📚 LIBRO</h4>
              <p>
                Il libro rappresenta l'apprendimento e la crescita personale: lo strumento con cui lo studente affronta sfide, supera ostacoli e costruisce il proprio futuro. È il simbolo della volontà di migliorarsi e realizzare i propri sogni, forgiando la propria identità nel mondo.
              </p>
            </div>
            <div className="simbolo-item">
              <h4>🎓 FELUCA</h4>
              <p>
                La feluca rappresenta l'altra metà dell'anima di uno studente: se il libro simboleggia lo studio e l'impegno quotidiano, la feluca incarna la partecipazione civile, la voglia di mettersi in gioco anche fuori dall'aula. Diventata nel corso del XIV secolo il copricapo dei clerici vagantes, giovani che viaggiavano in Europa per formarsi, si è poi trasformata nel tempo nel simbolo delle associazioni goliardiche e degli atenei italiani.
              </p>
            </div>
          </div>
          <div className="chi-siamo-image">
                <img 
              src="https://tesseramenti.azioneuniversitaria.it/images/logo_au.png" 
              alt="Logo Azione Universitaria Verona"
                  loading="lazy"
                  decoding="async"
            />
          </div>
        </div>
        
        <div className="battaglie-section">
          <h2>LE NOSTRE BATTAGLIE</h2>
          <p className="battaglie-intro">
            Da sempre ci impegnamo per un università diversa, migliore di giorno in giorno. 
            Le nostre proposte sono strutturali ma concrete; eccone alcune:
          </p>
        </div>
        
        <div className="highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <h4>{highlight.icon} {highlight.title}</h4>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo
