import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContattiPage.css'

const ContattiPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      // ZIMBRA OVH - Parametri semplificati per compatibilità
      const templateParams = {
        // Parametri base che esistono in quasi tutti i template
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        
        // Parametri alternativi (case il template li usi diversamente)
        name: formData.name,
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        
        // Oggetto
        subject: formData.subject || 'Nuovo messaggio dal sito',
        
        // Info aggiuntive nel messaggio
        full_message: `
MESSAGGIO DAL SITO AUVR

Nome: ${formData.name}
Email: ${formData.email}
Oggetto: ${formData.subject || 'Nuovo messaggio dal sito'}

Messaggio:
${formData.message}

Data: ${new Date().toLocaleDateString('it-IT')}
Ora: ${new Date().toLocaleTimeString('it-IT')}
        `,
        
        // Parametri opzionali
        to_email: 'info@auverona.it',
        reply_to: formData.email,
        date: new Date().toLocaleDateString('it-IT'),
        time: new Date().toLocaleTimeString('it-IT')
      }

      // Debug: mostra i parametri che stai inviando
      console.log('🚀 INIZIO DEBUG EMAILJS')
      console.log('Template Parameters:', templateParams)
      console.log('Service ID:', 'service_74wkl5e')
      console.log('Template ID:', 'template_du95iyj')
      console.log('Public Key:', '7dM4wI7SyP76uxXj6')
      console.log('Timestamp invio:', new Date().toISOString())

      // INVIO EMAIL CON EMAILJS
      console.log('📤 Tentativo di invio email...')
      
      // RIATTIVATO: EmailJS con gestione errori migliorata
      const result = await emailjs.send(
        'service_74wkl5e',     // Il tuo Service ID da EmailJS
        'template_du95iyj',     // Il tuo Template ID da EmailJS
        templateParams,
        '7dM4wI7SyP76uxXj6'      // La tua Public Key da EmailJS
      )
      
      // SIMULAZIONE PER TEST (commentata)
      // console.log('🚀 SIMULAZIONE: Email che sarebbe stata inviata:', templateParams)
      // await new Promise(resolve => setTimeout(resolve, 1500)) // Simula delay invio
      // const result = { status: 200, text: 'Simulazione OK' } // Simula risposta
      
      console.log('✅ Risposta EmailJS:', result)
      console.log('Status:', result.status)
      console.log('Text:', result.text)

      console.log('🎉 Email inviata con successo!')
      console.log('🔄 Resetting form...')
      
      // Reset form dopo invio
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('success')
      
      console.log('✅ Form reset completato')
      console.log('⏰ Impostazione timeout per nascondere messaggio...')
      
      // Nascondi messaggio di successo dopo 5 secondi
      setTimeout(() => {
        setSubmitStatus('idle')
        console.log('🔄 Status reset a idle')
      }, 5000)
      
    } catch (error: any) {
      console.error('❌ ERRORE DURANTE L\'INVIO:')
      console.error('Tipo errore:', typeof error)
      console.error('Messaggio:', error.message || error)
      console.error('Stack:', error.stack || 'N/A')
      
      if (error.status) {
        console.error('Status HTTP:', error.status)
      }
      if (error.text) {
        console.error('Testo errore:', error.text)
      }
      
      setSubmitStatus('error')
    } finally {
      console.log('🔧 FINALLY: Impostazione isSubmitting a false')
      setIsSubmitting(false)
      console.log('✅ DEBUG COMPLETATO')
    }
  }
  return (
    <div className="contatti-page">
      <Navbar />
      <main>
        <section className="contatti-hero">
          <div className="container">
            <h1>Contatti</h1>
            <p>Mettiti in contatto con noi per qualsiasi informazione</p>
          </div>
        </section>
        
        <section className="contatti-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Informazioni di Contatto</h2>
                
                <div className="contact-item">
                  <h3>📧 Email</h3>
                  <p>info@auverona.it</p>
                  <p>presidente@auverona.it</p>
                </div>
                
                <div className="contact-item">
                  <h3>📱 WhatsApp</h3>
                  <p>+39 XXX XXX XXXX</p>
                  <small>Disponibile dal lunedì al venerdì, 9:00-18:00</small>
                </div>
                
                <div className="contact-item">
                  <h3>📍 Sede</h3>
                  <p>Università degli Studi di Verona</p>
                  <p>Via dell'Università, 4</p>
                  <p>37129 Verona (VR)</p>
                </div>
                
                <div className="contact-item">
                  <h3>🕒 Orari di Ricevimento</h3>
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato: 9:00 - 13:00</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Inviaci un Messaggio</h2>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Messaggio inviato con successo! Ti risponderemo presto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Errore nell'invio. Riprova più tardi o contattaci direttamente.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nome *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Oggetto</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleziona un argomento</option>
                      <option value="info">Informazioni generali</option>
                      <option value="iscrizione">Iscrizione</option>
                      <option value="eventi">Eventi</option>
                      <option value="collaborazione">Collaborazione</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      placeholder="Scrivi qui il tuo messaggio..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="map-section">
              <h2>Come Raggiungerci</h2>
              <div className="map-placeholder">
                <p>🗺️ Mappa dell'Università di Verona</p>
                <p>Qui sarà inserita la mappa interattiva</p>
                <p><a href="#/aiuto-matricole">Serve aiuto? Vai alla pagina Aiuto Matricole</a></p>
              </div>
              
              <div className="transport-info">
                <h3>Mezzi di Trasporto</h3>
                <div className="transport-grid">
                  <div className="transport-item">
                    <h4>🚌 Autobus</h4>
                    <p>Linee 11, 12, 13 - Fermata "Università"</p>
                  </div>
                  <div className="transport-item">
                    <h4>🚗 Auto</h4>
                    <p>Parcheggio disponibile in Via dell'Università</p>
                  </div>
                  <div className="transport-item">
                    <h4>🚲 Bicicletta</h4>
                    <p>Rastrelliere per bici disponibili nel campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContattiPage
