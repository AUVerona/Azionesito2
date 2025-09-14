import React from 'react'
import Navbar from '../components/Navbar'
import ChiSiamo from '../components/ChiSiamo'
import Footer from '../components/Footer'
import './ChiSiamoPage.css'

const ChiSiamoPage: React.FC = () => {
  return (
    <div className="chi-siamo-page">
      <Navbar />
      <main>
        <ChiSiamo />
        {/* Qui puoi aggiungere altro contenuto specifico per la pagina Chi Siamo */}
        <section className="chi-siamo-extra">
          <div className="container">
            <h2>Le nostre attività</h2>
            <div className="content-section">
              <p>
                Per noi la politica non è solo discussione o rappresentanza: è presenza concreta, quotidiana, 
                nei corridoi e nelle aule, accanto agli studenti. Vivere l'università significa esserci, 
                condividere tempo ed energie per costruire qualcosa insieme.
              </p>
              <p>
                La militanza nasce proprio da questo: rinunciare a qualche ora di studio per preparare una grafica, 
                organizzare un banchetto o passare una notte a dipingere striscioni. In quei momenti <em>non esistono 
                ruoli o differenze</em>: tutti mettono a disposizione le proprie capacità, con lo stesso impegno e lo 
                stesso entusiasmo. Ogni gesto, anche il più semplice, diventa parte di un percorso comune.
              </p>
              <p>
                Realizzare uno striscione, preparare volantini o montare un gazebo non sono solo attività pratiche: 
                sono occasioni di comunità, di confronto e di amicizia. Sono i momenti in cui la fatica si trasforma 
                in forza collettiva e in cui nasce la consapevolezza di far parte di qualcosa di più grande.
              </p>
              <p>
                Militare, per noi, significa assumersi una responsabilità con coscienza e passione. Significa 
                mettersi al servizio degli studenti e dell'università, senza mai perdere il sorriso, perché ciò 
                che ci muove va ben oltre i voti o le elezioni. È <em>incarnare valori condivisi</em>, vivere la dimensione 
                comunitaria giorno dopo giorno e camminare insieme verso un futuro migliore.
              </p>
            </div>
            
            <h2>La storia di Azione Universitaria Verona</h2>
            <div className="content-section">
              <p>
                <strong>Azione Universitaria Verona</strong> nasce nell'<strong>ottobre del 2024</strong>, concorrendo già dagli inizi alle elezioni 
                interne dell'università dello stesso anno presentando una lista e riuscendo ad ottenere fin da subito 
                consensi nei vari dipartimenti, offrendo così agli studenti una <em>nuova e valida alternativa</em> alle diverse 
                liste già presenti.
              </p>
              <p>
                Azione Universitaria Verona non solo è promotrice di diverse iniziative culturali e organizzatrice di 
                vari momenti extrauniversitari e ricreativi per evadere dalla routine quotidiana: il suo obiettivo 
                principale è battersi per i diritti degli studenti e, per questo motivo, siamo e saremo sempre 
                <strong>dalla parte dello studente!</strong>
              </p>
            </div>

            <h2>Iniziative di Azione Universitaria</h2>
            <div className="content-section">
              <p>
                <strong>Azione Universitaria Verona</strong> crede in una formazione che vada oltre i libri. Lo studente universitario è una persona nella sua interezza: mente, corpo, spirito e cittadinanza.
                Per questo, le nostre attività mirano a <em>sviluppare cultura</em>, tutelare la salute, favorire l'integrazione sociale e stimolare il senso civico, con iniziative che lasciano un segno.
              </p>
              <p>
                Lo scorso anno abbiamo promosso e realizzato numerose iniziative che dimostrano il nostro <strong>impegno concreto</strong> per la comunità universitaria.
              </p>
            </div>

            <h3>Conferenza per la Giornata del Ricordo</h3>
            <div className="content-section">
              <p>
                Nel mese di febbraio abbiamo organizzato una conferenza per commemorare il <strong>Giorno del Ricordo</strong>, onorando le vittime delle foibe e l'esodo giuliano-dalmata.
                Un momento molto partecipato che ha voluto riconfermare la centralità della <em>verità storica</em>, contrastando ogni forma di oblio e negazionismo.
              </p>
              <p>
                Grazie alla preziosa testimonianza di <strong>Marina Smaila</strong>, esule giuliano-dalmata, e della lectio magistralis del giornalista di guerra <strong>Fausto Biloslavo</strong>, 
                abbiamo potuto approfondire la panoramica storica e politica dell'epoca. La vasta presenza studentesca ha confermato quanto sia sentita 
                la necessità di <em>difendere la memoria nazionale</em> e i suoi valori.
              </p>
            </div>

            <h3>Corso BLSD - Formazione al primo soccorso</h3>
            <div className="content-section">
              <p>
                La sicurezza è una <strong>responsabilità di tutti</strong>. Grazie alla presenza di formatori professionisti, gli studenti hanno potuto 
                partecipare a un corso BLSD completo, imparando le manovre salvavita e l'uso del defibrillatore.
              </p>
              <p>
                Alla fine del corso è stato rilasciato un <em>attestato con validità nazionale e internazionale</em>, utile anche per il curriculum.
                Un'occasione utile e concreta che ha registrato il <strong>tutto esaurito</strong> in poche ore.
              </p>
            </div>

            <h3>Ca' Vignal: una vittoria per il decoro e la legalità</h3>
            <div className="content-section">
              <p>
                Dopo oltre dieci anni di occupazione abusiva di un'area nel parcheggio di Ca' Vignal, <strong>Azione Universitaria</strong> si è attivata 
                per via legale e istituzionale per segnalare l'irregolarità e sollecitare le autorità competenti.
              </p>
              <p>
                Il risultato? L'abusivo ha lasciato l'area, restituendo <em>dignità e sicurezza</em> a uno spazio frequentato ogni giorno da studenti 
                e personale universitario. Un risultato concreto, ottenuto con serietà, determinazione e <strong>rispetto della legge</strong>.
                Una dimostrazione di cosa significhi davvero difendere l'università, gli studenti e la comunità.
              </p>
            </div>

            <h3>Trekking in Lessinia - Natura, comunità, respiro</h3>
            <div className="content-section">
              <p>
                Per ritrovare l'equilibrio tra studio e benessere, abbiamo promosso una giornata di escursione in <strong>Lessinia</strong>, 
                tra paesaggi mozzafiato e condivisione. È stata l'occasione perfetta per socializzare tra studenti, respirare aria pulita 
                e rinsaldare i <em>legami umani</em>, lontano dalla pesantezza delle aule.
              </p>
              <p>
                L'iniziativa ha avuto <strong>grande successo</strong>, con ampia partecipazione e feedback entusiasti.
              </p>
            </div>

            <h3>Aperitivi universitari - Socialità, confronto, amicizia</h3>
            <div className="content-section">
              <p>
                Durante l'anno abbiamo organizzato diversi <strong>aperitivi nelle zone universitarie</strong>, pensati per favorire la conoscenza reciproca, 
                l'integrazione tra universitari di diversi corsi e la possibilità di creare una rete di <em>amicizie e collaborazioni</em>.
              </p>
              <p>
                In queste occasioni hanno partecipato <strong>centinaia di studentesse e studenti</strong>. Un piccolo gesto ma necessario 
                per alleggerire gli effetti di una lezione pesante a inizio pomeriggio.
              </p>
            </div>

            <div className="content-section call-to-action">
              <p style={{textAlign: 'center', fontSize: '1.2rem', fontWeight: '600', color: '#1a365d', marginTop: '3rem'}}>
                <strong>Beh, che aspetti?</strong><br />
                <em>Sei pronto ad entrare in Azione?</em>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ChiSiamoPage
