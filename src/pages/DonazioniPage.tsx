import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './DonazioniPage.css'

const DonazioniPage: React.FC = () => {
  return (
    <div className="donazioni-page">
      <Navbar />
      <main>
        {/* Hero Section semplificata */}
        <section className="donazioni-hero">
          <div className="container">
            <h1>Sostieni la nostra Associazione</h1>
          </div>
        </section>

        {/* Contenuto principale seguendo il pattern di ChiSiamoPage */}
        <section className="donazioni-content-section">
          <div className="container">
            <h2>Perché donare alla nostra Associazione?</h2>
            <div className="content-section">
              <p>
                L'<strong>Associazione Universitaria di Verona</strong> è un'organizzazione senza scopo di lucro 
                che si dedica quotidianamente a migliorare l'esperienza universitaria degli studenti. 
                La nostra missione va oltre la semplice rappresentanza: creiamo <em>comunità, opportunità e crescita</em>.
              </p>
              <p>
                Ogni donazione, anche la più piccola, ci permette di continuare a offrire <strong>servizi gratuiti</strong> 
                e di alta qualità a tutti gli studenti dell'Università di Verona. Il tuo sostegno non è solo 
                un contributo economico, ma un investimento nel futuro della nostra comunità studentesca.
              </p>
              <p>
                Grazie al supporto dei nostri sostenitori, possiamo organizzare eventi formativi, 
                workshop professionali, attività ricreative e fornire materiali di studio accessibili a tutti. 
                La tua generosità fa la differenza nella vita di centinaia di studenti.
              </p>
            </div>

            <h2>Le nostre attività finanziate dalle donazioni</h2>
            <div className="content-section">
              <p>
                Le tue donazioni ci permettono di realizzare progetti concreti che hanno un <strong>impatto diretto</strong> 
                sulla vita universitaria degli studenti veronesi.
              </p>
            </div>

            <h3>🎓 Eventi formativi e workshop gratuiti</h3>
            <div className="content-section">
              <p>
                Organizziamo regolarmente <strong>seminari professionali</strong>, corsi di formazione e workshop 
                specialistici che preparano gli studenti al mondo del lavoro. Dall'informatica alle soft skills, 
                offriamo formazione <em>complementare e gratuita</em> per tutti.
              </p>
            </div>

            <h3>🤝 Supporto alle matricole e orientamento</h3>
            <div className="content-section">
              <p>
                Il nostro programma di <strong>mentoring per le matricole</strong> aiuta i nuovi studenti 
                a orientarsi nel mondo universitario. Tutor dedicati, guide pratiche e eventi di benvenuto 
                rendono l'ingresso all'università meno stressante e più <em>inclusivo</em>.
              </p>
            </div>

            <h3>🎉 Attività ricreative e di socializzazione</h3>
            <div className="content-section">
              <p>
                Crediamo che l'università non sia solo studio. Organizziamo eventi ricreativi, 
                feste a tema, gite e attività sportive che permettono agli studenti di <strong>socializzare</strong> 
                e creare legami duraturi al di fuori delle aule.
              </p>
            </div>

            <h2>Come puoi contribuire</h2>
            <div className="content-section">
              <p>
                Abbiamo reso il processo di donazione <strong>semplice e sicuro</strong>. Puoi scegliere 
                il metodo che preferisci tra le opzioni disponibili. Ogni contributo, indipendentemente 
                dall'importo, è prezioso e <em>fa la differenza</em>.
              </p>
            </div>

            <h3>💳 Bonifico Bancario</h3>
            <div className="content-section">
              <p>
                Per donazioni tramite bonifico bancario, utilizza i seguenti dati:
              </p>
              <div className="bank-details">
                <p><strong>Intestatario:</strong> Associazione Universitaria Verona</p>
                <p><strong>IBAN:</strong> IT60 X054 2811 1010 0000 0123 456</p>
                <p><strong>Causale:</strong> Donazione liberale AUVR</p>
              </div>
            </div>

            <h3>📱 Donazioni digitali</h3>
            <div className="content-section">
              <p>
                Per chi preferisce donazioni rapide e digitali, mettiamo a disposizione piattaforme 
                sicure e certificate:
              </p>
              <div className="digital-donations">
                <a 
                  href="https://paypal.me/auverona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="donation-button paypal-button"
                >
                  💳 Dona con PayPal
                </a>
                <a 
                  href="https://ko-fi.com/auverona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="donation-button kofi-button"
                >
                  ☕ Offrici un caffè
                </a>
              </div>
            </div>

            <h2>Trasparenza e responsabilità</h2>
            <div className="content-section">
              <p>
                Crediamo nella <strong>massima trasparenza</strong> nell'utilizzo delle donazioni ricevute. 
                Ogni euro viene utilizzato responsabilmente per il benessere degli studenti e lo sviluppo 
                delle nostre attività. La fiducia dei nostri sostenitori è <em>la base del nostro operato</em>.
              </p>
              <p>
                Le donazioni vengono destinate principalmente a eventi e attività studentesche (60%), 
                materiali e risorse educative (25%), e una piccola percentuale per le spese amministrative 
                necessarie al funzionamento dell'associazione (15%).
              </p>
            </div>

            <div className="call-to-action">
              <p>
                <strong>Grazie di cuore!</strong> Ogni donazione è preziosa e ci permette di continuare 
                la nostra missione. Grazie per credere in noi e per sostenere la comunità studentesca 
                di Verona! ❤️
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DonazioniPage
