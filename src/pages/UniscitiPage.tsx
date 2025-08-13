import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './UniscitiPage.css'

const UniscitiPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    corso: '',
    annoStudio: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log('🚀 === INIZIO DEBUG FORM ISCRIZIONE ===')
      console.log('📧 Timestamp:', new Date().toISOString())
      console.log('📋 Dati form completi:', formData)

      // Costruisco il blocco unico di testo (NON più in email per evitare duplicati)
      const now = new Date()
      const dataLocale = now.toLocaleDateString('it-IT')
      const oraLocale = now.toLocaleTimeString('it-IT')
      const summaryMessage = `NUOVA ISCRIZIONE AUVR - ${formData.nome} ${formData.cognome}\n\n` +
        `DATI PERSONALI:\n` +
        `Nome: ${formData.nome}\n` +
        `Cognome: ${formData.cognome}\n` +
        `Email: ${formData.email}\n` +
        `Telefono: ${formData.telefono || 'Non fornito'}\n\n` +
        `PERCORSO UNIVERSITARIO:\n` +
        `Corso di Studio: ${formData.corso}\n` +
        `Anno di Corso: ${formData.annoStudio}\n\n` +
        `DATA ISCRIZIONE: ${dataLocale} alle ${oraLocale}\n\n` +
        `Iscrizione ricevuta tramite sito web AUVR.`

      // Parametri: email = SOLO indirizzo, campi singoli valorizzati, messaggio completo solo in message/full_message
      const templateParams = {
        from_name: `${formData.nome} ${formData.cognome}`,
        from_email: formData.email,        // usato per reply
        reply_to: formData.email,
        subject: `Nuova Iscrizione AUVR - ${formData.nome} ${formData.cognome}`,

        // Valori atomici che il template mostrava vuoti prima
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,          // solo indirizzo mail ora
        telefono: formData.telefono || 'Non fornito',
        corso: formData.corso,
        anno: formData.annoStudio,
        data_iscrizione: dataLocale,
        ora_iscrizione: oraLocale,

        // Messaggi completi
        message: summaryMessage,
        full_message: summaryMessage,
        user_name: `${formData.nome} ${formData.cognome}`,
        user_email: formData.email
      }

      console.log('🧹 RIMOSSA DUPLICAZIONE: email contiene solo indirizzo')
      console.log('templateParams (final):', templateParams)
      
      const result = await emailjs.send(
        'service_74wkl5e',           // Service ID
        'template_du95iyj',          // Template contatti esistente (FUNZIONA)
        templateParams,              // Parametri identici ai contatti
        '7dM4wI7SyP76uxXj6'         // Public Key
      )

      console.log('✅ === INVIO COMPLETATO CON SUCCESSO ===')
      console.log('📊 Risultato EmailJS:', result)
      console.log('🎉 Email inviata con successo!')
      
      // Reset form dopo invio
      setFormData({
        nome: '', cognome: '', email: '', telefono: '', corso: '', 
        annoStudio: ''
      })
      setSubmitStatus('success')
      setShowForm(false)
      
      // Nascondi messaggio dopo 8 secondi
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 8000)
      
    } catch (error: any) {
      console.error('❌ === ERRORE DURANTE INVIO ===')
      console.error('📊 Oggetto errore completo:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="unisciti-page">
      <Navbar />
      <main>
        <section className="unisciti-hero">
          <div className="container">
            <h1>Lascia il tuo contatto, ti terremo aggiornato!</h1>
            <p>Diventa parte della nostra community universitaria!</p>
          </div>
        </section>
        
        <section className="unisciti-content">
          <div className="container">
            <h2>Perché Unirti a Noi?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Supporto Accademico</h3>
                <p>Ricevi aiuto per gli esami, materiali di studio e consigli dai tuoi colleghi più esperti.</p>
              </div>
              <div className="benefit-card">
                <h3>Network Professionale</h3>
                <p>Costruisci relazioni che ti accompagneranno durante e dopo l'università.</p>
              </div>
              <div className="benefit-card">
                <h3>Eventi e Attività</h3>
                <p>Partecipa a eventi, workshop e attività ricreative organizzate dalla nostra associazione.</p>
              </div>
            </div>
            
            <h2>Come Iscriversi</h2>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>Compila il modulo di iscrizione online</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Partecipa al nostro evento di benvenuto</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>Inizia a far parte della community!</p>
              </div>
            </div>
            
            <div className="cta-section">
              {submitStatus === 'success' && (
                <div className="success-message">
                  🎉 Iscrizione inviata con successo! Riceverai presto conferma via email.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Errore nell'invio. Riprova più tardi o contattaci direttamente.
                </div>
              )}

              {!showForm ? (
                <div className="cta-buttons">
                  <a 
                    className="cta-button primary"
                    href="#/unisciti"
                  >
                    Iscriviti Ora
                  </a>
                  <p>L'iscrizione è gratuita per tutti gli studenti dell'Università di Verona</p>
                </div>
              ) : (
                <div className="inscription-form">
                  <h2>Modulo di Iscrizione</h2>
                  <p>Compila tutti i campi per completare la tua iscrizione all'AUVR</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nome">Nome *</label>
                        <input 
                          type="text" 
                          id="nome" 
                          name="nome" 
                          value={formData.nome}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cognome">Cognome *</label>
                        <input 
                          type="text" 
                          id="cognome" 
                          name="cognome" 
                          value={formData.cognome}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Universitaria *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nome.cognome@studenti.univr.it"
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                          type="tel" 
                          id="telefono" 
                          name="telefono" 
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="+39 XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="corso">Corso di Studio *</label>
                        <input 
                          type="text" 
                          id="corso" 
                          name="corso" 
                          value={formData.corso}
                          onChange={handleInputChange}
                          placeholder="es. Informatica, Economia, Medicina..."
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="annoStudio">Anno di Corso *</label>
                        <select 
                          id="annoStudio" 
                          name="annoStudio"
                          value={formData.annoStudio}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Seleziona anno</option>
                          <option value="1° Anno">1° Anno</option>
                          <option value="2° Anno">2° Anno</option>
                          <option value="3° Anno">3° Anno</option>
                          <option value="1° Anno Magistrale">1° Anno Magistrale</option>
                          <option value="2° Anno Magistrale">2° Anno Magistrale</option>
                          <option value="Dottorato">Dottorato</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-buttons">
                      <button 
                        type="button" 
                        className="cta-button secondary"
                        onClick={() => setShowForm(false)}
                      >
                        Annulla
                      </button>
                      <button 
                        type="submit" 
                        className="cta-button primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Invio in corso...' : 'Completa Iscrizione'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default UniscitiPage
