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

          <h2 className="reveal-up fx">Iniziative di Azione Universitaria</h2>
            <div className="content-section">
              <p className="reveal">
                <strong>Azione Universitaria Verona</strong> crede in una formazione che vada oltre i libri. Lo studente universitario è una persona nella sua interezza: mente, corpo, spirito e cittadinanza.
                Per questo, le nostre attività mirano a <em>sviluppare cultura</em>, tutelare la salute, favorire l'integrazione sociale e stimolare il senso civico, con iniziative che lasciano un segno.
              </p>
              <p className="reveal reveal-delay-1">
                Lo scorso anno abbiamo promosso e realizzato numerose iniziative che dimostrano il nostro <strong>impegno concreto</strong> per la comunità universitaria.
              </p>
            </div>

            <h3 className="reveal-up">Conferenza per la Giornata del Ricordo</h3>
            <div className="content-section">
              <p className="reveal">
                Nel mese di febbraio abbiamo organizzato una conferenza per commemorare il <strong>Giorno del Ricordo</strong>, onorando le vittime delle foibe e l'esodo giuliano-dalmata.
                Un momento molto partecipato che ha voluto riconfermare la centralità della <em>verità storica</em>, contrastando ogni forma di oblio e negazionismo.
              </p>
              <p className="reveal reveal-delay-1">
                Grazie alla preziosa testimonianza di <strong>Marina Smaila</strong>, esule giuliano-dalmata, e della lectio magistralis del giornalista di guerra <strong>Fausto Biloslavo</strong>, 
                abbiamo potuto approfondire la panoramica storica e politica dell'epoca. La vasta presenza studentesca ha confermato quanto sia sentita 
                la necessità di <em>difendere la memoria nazionale</em> e i suoi valori.
              </p>
            </div>

            <h3 className="reveal-up">Corso BLSD - Formazione al primo soccorso</h3>
            <div className="content-section">
              <p className="reveal">
                La sicurezza è una <strong>responsabilità di tutti</strong>. Grazie alla presenza di formatori professionisti, gli studenti hanno potuto 
                partecipare a un corso BLSD completo, imparando le manovre salvavita e l'uso del defibrillatore.
              </p>
              <p className="reveal reveal-delay-1">
                Alla fine del corso è stato rilasciato un <em>attestato con validità nazionale e internazionale</em>, utile anche per il curriculum.
                Un'occasione utile e concreta che ha registrato il <strong>tutto esaurito</strong> in poche ore.
              </p>
            </div>

            <h3 className="reveal-up">Ca' Vignal: una vittoria per il decoro e la legalità</h3>
            <div className="content-section">
              <p className="reveal">
                Dopo oltre dieci anni di occupazione abusiva di un'area nel parcheggio di Ca' Vignal, <strong>Azione Universitaria</strong> si è attivata 
                per via legale e istituzionale per segnalare l'irregolarità e sollecitare le autorità competenti.
              </p>
              <p className="reveal reveal-delay-1">
                Il risultato? L'abusivo ha lasciato l'area, restituendo <em>dignità e sicurezza</em> a uno spazio frequentato ogni giorno da studenti 
                e personale universitario. Un risultato concreto, ottenuto con serietà, determinazione e <strong>rispetto della legge</strong>.
                Una dimostrazione di cosa significhi davvero difendere l'università, gli studenti e la comunità.
              </p>
            </div>

            <h3 className="reveal-up">Trekking in Lessinia - Natura, comunità, respiro</h3>
            <div className="content-section">
              <p className="reveal">
                Per ritrovare l'equilibrio tra studio e benessere, abbiamo promosso una giornata di escursione in <strong>Lessinia</strong>, 
                tra paesaggi mozzafiato e condivisione. È stata l'occasione perfetta per socializzare tra studenti, respirare aria pulita 
                e rinsaldare i <em>legami umani</em>, lontano dalla pesantezza delle aule.
              </p>
              <p className="reveal reveal-delay-1">
                L'iniziativa ha avuto <strong>grande successo</strong>, con ampia partecipazione e feedback entusiasti.
              </p>
            </div>

            <h3 className="reveal-up">Aperitivi universitari - Socialità, confronto, amicizia</h3>
            <div className="content-section">
              <p className="reveal">
                Durante l'anno abbiamo organizzato diversi <strong>aperitivi nelle zone universitarie</strong>, pensati per favorire la conoscenza reciproca, 
                l'integrazione tra universitari di diversi corsi e la possibilità di creare una rete di <em>amicizie e collaborazioni</em>.
              </p>
              <p className="reveal reveal-delay-1">
                In queste occasioni hanno partecipato <strong>centinaia di studentesse e studenti</strong>. Un piccolo gesto ma necessario 
                per alleggerire gli effetti di una lezione pesante a inizio pomeriggio.
              </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AttivitaPage
