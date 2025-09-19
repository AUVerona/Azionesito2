import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './UniscitiPage.css'
import '../styles/globalPageStyles.css'

const UniscitiPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    corso: '',
    annoStudio: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validazione reCAPTCHA
    if (!recaptchaValue) {
      setSubmitStatus('error')
      return
    }
    
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
        annoStudio: '', message: ''
      })
      setPrivacyAccepted(false)
      setRecaptchaValue(null)
      setSubmitStatus('success')
      
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
    <div className="contatti-page global-page-layout">
      <Navbar />
      <main>
        <div className="container global-page-container">
          <h1>Contattaci</h1>
          
          <section className="form-section">
            {submitStatus === 'success' && (
              <div className="success-message">
                🎉 Messaggio inviato con successo! Ti risponderemo al più presto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Errore nell'invio. Verifica che tutti i campi siano compilati correttamente e completa la verifica di sicurezza reCAPTCHA.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="nome" 
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Nome*"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="cognome" 
                    value={formData.cognome}
                    onChange={handleInputChange}
                    placeholder="Cognome*"
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail*"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="telefono" 
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Telefono"
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <input 
                  type="text" 
                  name="corso" 
                  value={formData.corso}
                  onChange={handleInputChange}
                  placeholder="Corso di Studi"
                  required 
                />
              </div>
              
              <div className="form-group full-width">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Scrivi qui il tuo messaggio..."
                  rows={6}
                ></textarea>
              </div>
              
              <div className="privacy-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    required
                  />
                  <span>Ho letto e accetto l'<a href="/#/privacy" target="_blank">informativa privacy</a></span>
                </label>
              </div>
              
              <div className="recaptcha-group">
                <ReCAPTCHA
                  sitekey="6LdKX8krAAAAAGUddknlxZkDPdI3E1SVLqjm32v0"
                  onChange={(value) => setRecaptchaValue(value)}
                  onExpired={() => setRecaptchaValue(null)}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting || !privacyAccepted || !recaptchaValue}
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia la tua richiesta'}
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default UniscitiPage
