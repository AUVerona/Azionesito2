import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { getImagePath } from '../utils/paths'

interface Card {
  icon?: string
  image?: string
  title: string
  description: string
  link?: string
  isExternal?: boolean
}


const ElevatedCards: React.FC = () => {
  const handleCardClick = (card: Card) => {
    if (card.link) {
      if (card.isExternal) {
        window.open(card.link, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = card.link
      }
    }
  }

  // Prima card
  const primaCard = {
    image: getImagePath('bando-150-ore.jpeg'),
    title: 'Bando 150 Ore UniVR 2025/26',
    description: 'Collaborazione part-time retribuita (8€/ora, max 1.200€) per studenti iscritti entro il 15/10/2025',
    link: 'https://www.instagram.com/p/DM2X84zi0f_/?utm_source=ig_web_copy_link&igsh=MTRoc3JocDU2M3FpNw==',
    isExternal: true
  };

  // Eventi AURORA - Ottobre 2025
  const eventiAU: { data: string; titolo: string; descrizione: string }[] = [
    { data: '2025-10-01', titolo: 'Matricole day', descrizione: 'Giornata di benvenuto per le matricole' },
    { data: '2025-10-09', titolo: 'AURORA', descrizione: 'Festival Aurora di Azione Universitaria' },
    { data: '2025-10-10', titolo: 'AURORA', descrizione: 'Festival Aurora di Azione Universitaria' },
    { data: '2025-10-11', titolo: 'AURORA', descrizione: 'Festival Aurora di Azione Universitaria' },
  ];

  // Date degli eventi in formato Date
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [popupPos, setPopupPos] = useState<{top: number, left: number} | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  // Chiudi popup se clicchi fuori dal calendario e dal popup
  useEffect(() => {
    if (!selectedEvent) return;
    const handleClick = (e: MouseEvent) => {
      const calendarNode = calendarRef.current;
      const popupNode = popupRef.current;
      if (
        popupNode && !popupNode.contains(e.target as Node) &&
        calendarNode && !calendarNode.contains(e.target as Node)
      ) {
        setSelectedEvent(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [selectedEvent]);
  // Stato per il mese visualizzato
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  return (
  <section className="elevated-cards overlap-chi-siamo" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%', position: 'relative', zIndex: 10, marginTop: '-60px', paddingTop: '0', paddingBottom: '1.2rem', marginBottom: '-48px' }}>
      <div className="cards-container" style={{ display: 'flex', gap: '2rem', alignItems: 'stretch', flexWrap: 'wrap' }}>
        {/* Prima card */}
        <div 
          className={`card card-clickable card-with-image`}
          onClick={() => handleCardClick(primaCard)}
          style={{ cursor: 'pointer', flex: '1 1 280px', maxWidth: 340, minWidth: 260 }}
        >
          <div className="card-image">
            <img src={primaCard.image} alt={primaCard.title} loading="lazy" decoding="async" />
          </div>
          <h3>{primaCard.title}</h3>
          <p>{primaCard.description}</p>
        </div>

        {/* Calendario Desktop */}
        <div 
          className="card card-with-image desktop-calendar" 
          style={{ 
            minHeight: 400, 
            flex: '3 1 600px', 
            maxWidth: '1400px', 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            marginLeft: 0,
            overflowX: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* Header mese */}
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            marginBottom: 10,
            marginTop: 8,
            userSelect: 'none',
          }}>
            <button
              aria-label="Mese precedente"
              style={{
                background: 'none',
                border: 'none',
                color: '#2E86C1',
                fontSize: '2.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '0 10px',
                borderRadius: 8,
                transition: 'background 0.15s',
              }}
              onClick={() => {
                const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
                setCurrentMonth(prev);
              }}
              tabIndex={0}
            >
              &#8592;
            </button>
            <span style={{
              fontWeight: 800,
              fontSize: '1.7rem',
              color: '#2E86C1',
              letterSpacing: 1,
              textShadow: '0 2px 8px rgba(46,134,193,0.08)',
              minWidth: 180,
              textAlign: 'center',
              display: 'inline-block',
            }}>
              {currentMonth.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' }).replace(/^./, c => c.toUpperCase())}
            </span>
            <button
              aria-label="Mese successivo"
              style={{
                background: 'none',
                border: 'none',
                color: '#2E86C1',
                fontSize: '2.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '0 10px',
                borderRadius: 8,
                transition: 'background 0.15s',
              }}
              onClick={() => {
                const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
                setCurrentMonth(next);
              }}
              tabIndex={0}
            >
              &#8594;
            </button>
          </div>
          {/* Calendario vero e proprio */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
            <div ref={calendarRef} style={{ width: '100%', maxWidth: '100%', margin: '0 auto', boxShadow: '0 4px 24px 0 rgba(46,134,193,0.13)', borderRadius: 18, background: 'linear-gradient(135deg, #eaf6fb 60%, #f8f9fa 100%)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflowX: 'hidden', boxSizing: 'border-box' }}>
              <Calendar
                activeStartDate={currentMonth}
                value={selectedDate}
                onClickDay={(date, event) => {
                  const evento = eventiAU.find(ev => new Date(ev.data).toDateString() === date.toDateString());
                  if (evento && event) {
                    // Usa le coordinate della pagina per posizionare il popup, così resta fisso anche se scrolli
                    const e = event as React.MouseEvent;
                    setPopupPos({
                      top: (e.pageY ?? 0) - 24,
                      left: (e.pageX ?? 0)
                    });
                    setSelectedDate(date as Date);
                    setSelectedEvent(evento);
                  } else {
                    setSelectedEvent(null);
                  }
                }}
                onChange={date => setSelectedDate(date as Date)}
                tileContent={({ date, view }) => {
                  if (view === 'month') {
                    const evento = eventiAU.find(ev => new Date(ev.data).toDateString() === date.toDateString());
                    if (evento) {
                      return (
                        <>
                          <span className="event-day-square" style={{
                            display: 'inline-block',
                            background: '#2E86C1',
                            color: '#fff',
                            borderRadius: 8,
                            fontWeight: 700,
                            width: 36,
                            height: 36,
                            lineHeight: '36px',
                            fontSize: '1.1rem',
                            marginBottom: 2
                          }}>{date.getDate()}</span>
                          <div style={{ fontSize: '0.7rem', color: '#2E86C1', fontWeight: 600, textAlign: 'center', lineHeight: 1.1, marginTop: 2 }}>{evento.titolo}</div>
                        </>
                      );
                    } else {
                      // Mostra il numero normale nei giorni senza evento
                      return <span className="normal-day">{date.getDate()}</span>;
                    }
                  }
                  return null;
                }}
                prev2Label={null}
                next2Label={null}
                prevLabel={null}
                nextLabel={null}
                calendarType="iso8601"
                locale="it-IT"
                navigationLabel={() => null}
                // Disabilita la navigazione mese tramite click sulle aree vuote
                onClickMonth={(_: Date, event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()}
                // Aggiorna il mese visualizzato quando si cambia mese
                onActiveStartDateChange={({ activeStartDate }) => {
                  if (activeStartDate) setCurrentMonth(activeStartDate);
                  setSelectedEvent(null);
                  setSelectedDate(null);
                }}
              />
              {/* Popup dettagli evento sopra la cella */}
              {selectedEvent && popupPos && createPortal(
                <div>
                  {/* Overlay invisibile solo per chiusura, lasciato per compatibilità mobile */}
                  <div
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      background: 'transparent',
                      zIndex: 9,
                      cursor: 'pointer',
                    }}
                  />
                  <div
                    ref={popupRef}
                    style={{
                      position: 'absolute',
                      top: popupPos.top,
                      left: popupPos.left,
                      transform: 'translate(-50%, -100%)',
                      zIndex: 10,
                      background: '#18304b',
                      borderRadius: 14,
                      padding: '1.1rem 1.3rem 1.2rem 1.3rem',
                      maxWidth: 410,
                      width: 410,
                      boxSizing: 'border-box',
                      boxShadow: '0 8px 32px rgba(24,48,75,0.18)',
                      border: '2px solid #2E86C1',
                      cursor: 'auto',
                      pointerEvents: 'auto',
                      textAlign: 'left',
                      overflowX: 'auto',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div style={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      marginBottom: 14,
                      letterSpacing: 0.2,
                      textShadow: '0 2px 8px rgba(24,48,75,0.10)'
                    }}>{selectedEvent.titolo}</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 8 }}>
                      <tbody>
                        <tr>
                          <td style={{ color: '#b8d6f2', fontWeight: 600, padding: '4px 8px 4px 0', width: 90 }}>Data e ora</td>
                          <td style={{ color: '#fff', fontWeight: 500, padding: '4px 0' }}>{new Date(selectedEvent.data).toLocaleDateString('it-IT')}<span style={{ color: '#b8d6f2', fontWeight: 400, marginLeft: 8, fontSize: '0.98em' }}>ore 18:00</span></td>
                        </tr>
                        <tr>
                          <td style={{ color: '#b8d6f2', fontWeight: 600, padding: '4px 8px 4px 0' }}>Luogo</td>
                          <td style={{ color: '#fff', fontWeight: 500, padding: '4px 0' }}>Aula Magna, UniVR</td>
                        </tr>
                        <tr>
                          <td style={{ color: '#b8d6f2', fontWeight: 600, padding: '4px 8px 4px 0', verticalAlign: 'top' }}>Descrizione</td>
                          <td style={{ color: '#fff', fontWeight: 400, padding: '4px 0', fontSize: '1.05em' }}>{selectedEvent.descrizione}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>,
                document.body
              )}
            </div>
          </div>
        </div>

        {/* Calendario Mobile Ottimizzato */}
        <div className="mobile-calendar" style={{ display: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(46,134,193,0.15)',
            padding: '1.5rem',
            margin: '1rem',
          }}>
            {/* Header semplificato per mobile */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #2E86C1',
              paddingBottom: '1rem'
            }}>
              <button
                onClick={() => {
                  const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
                  setCurrentMonth(prev);
                }}
                style={{
                  background: '#2E86C1',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(46,134,193,0.3)'
                }}
              >
                &#8592;
              </button>
              <h3 style={{
                margin: 0,
                color: '#2E86C1',
                fontSize: '1.3rem',
                fontWeight: 700,
                textAlign: 'center'
              }}>
                {currentMonth.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' }).replace(/^./, c => c.toUpperCase())}
              </h3>
              <button
                onClick={() => {
                  const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
                  setCurrentMonth(next);
                }}
                style={{
                  background: '#2E86C1',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(46,134,193,0.3)'
                }}
              >
                &#8594;
              </button>
            </div>

            {/* Lista eventi compatta per mobile */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                margin: '0 0 1rem 0', 
                color: '#2E86C1', 
                fontSize: '1.1rem',
                fontWeight: 600 
              }}>
                Eventi {currentMonth.toLocaleDateString('it-IT', { month: 'long' })}:
              </h4>
              {eventiAU
                .filter(evento => {
                  const eventoDate = new Date(evento.data);
                  return eventoDate.getMonth() === currentMonth.getMonth() && 
                         eventoDate.getFullYear() === currentMonth.getFullYear();
                })
                .map((evento, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#2E86C1',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: '12px',
                      marginBottom: '0.8rem',
                      boxShadow: '0 4px 16px rgba(46,134,193,0.2)'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <strong style={{ fontSize: '1.1rem' }}>{evento.titolo}</strong>
                      <span style={{ 
                        background: 'rgba(255,255,255,0.2)', 
                        padding: '0.3rem 0.6rem', 
                        borderRadius: '8px',
                        fontSize: '0.9rem'
                      }}>
                        {new Date(evento.data).getDate()}/{currentMonth.getMonth() + 1}
                      </span>
                    </div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.95rem', 
                      opacity: 0.9,
                      lineHeight: 1.4
                    }}>
                      {evento.descrizione}
                    </p>
                    <div style={{ 
                      marginTop: '0.5rem', 
                      fontSize: '0.85rem', 
                      opacity: 0.8 
                    }}>
                      📍 Aula Magna, UniVR • 🕕 ore 18:00
                    </div>
                  </div>
                ))}
              {eventiAU.filter(evento => {
                const eventoDate = new Date(evento.data);
                return eventoDate.getMonth() === currentMonth.getMonth() && 
                       eventoDate.getFullYear() === currentMonth.getFullYear();
              }).length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#666',
                  fontStyle: 'italic',
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '12px'
                }}>
                  Nessun evento in programma per questo mese
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
          <style>{`
            @media (max-width: 480px) {
              .elevated-cards .card-with-image > div[style*='position: absolute'] {
                width: 100% !important;
                min-width: 0 !important;
                left: 50% !important;
                transform: translate(-50%, -100%) !important;
              }
            }
            body { overflow-x: hidden !important; }
            .elevated-cards { overflow-x: hidden; max-width: 100vw; width: 100%; }

            .elevated-cards .card-with-image { overflow-x: hidden !important; max-width: 100% !important; }
            .elevated-cards .card-with-image > div { overflow-x: hidden !important; max-width: 100% !important; width: 100% !important; }
            .elevated-cards .card-with-image .react-calendar { width: 100% !important; max-width: 100% !important; min-width: 0 !important; }
            .react-calendar {
              border: none !important;
              font-family: inherit;
              font-size: 1.28rem;
              background: transparent;
              width: 100%;
              box-shadow: none;
            }
            .react-calendar__navigation button {
              color: #2E86C1;
              min-width: 48px;
              font-size: 1.45rem;
              background: none;
              border-radius: 8px;
              border: none;
              margin: 2px 4px;
            }
            /* Disabilita il puntatore e l'hover sulle aree vuote della navigation (dove c'erano le frecce) */
            .react-calendar__navigation__arrow,
            .react-calendar__navigation__label {
              pointer-events: none !important;
              cursor: default !important;
              opacity: 0.5;
            }
            .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus {
              background: #eaf6fb;
            }
            .react-calendar__tile {
              border-radius: 12px;
              font-weight: 500;
              font-size: 1.18rem;
              padding: 0.2em 0.3em 0.7em 0.3em;
              height: 60px;
              min-height: 60px;
              vertical-align: top;
              margin-top: 40px;
            }
            /* Mostra il numero normale solo nei giorni senza evento */
            .react-calendar__month-view__days__day > abbr {
              display: none;
            }
            .react-calendar__month-view__days__day .normal-day {
              display: inline;
              color: #222;
              font-size: 1.08rem;
              font-weight: 500;
            }
            .event-day-square {
              background: #2E86C1 !important;
              color: #fff !important;
              border-radius: 8px !important;
              font-weight: 700;
              box-shadow: 0 2px 8px rgba(46,134,193,0.13);
              width: 36px;
              height: 36px;
              display: inline-block;
              text-align: center;
              line-height: 36px;
              margin-bottom: 2px;
            }
            .card, .card-with-image {
              /* Rimuovi eventuali animazioni, scaling e ombra */
              transition: none !important;
              animation: none !important;
              box-shadow: none !important;
            }
            .card:hover, .card-with-image:hover, .card:focus, .card-with-image:focus {
              /* Nessun effetto hover di scaling o allargamento */
              transform: none !important;
              box-shadow: none !important;
            }
            .react-calendar:hover, .react-calendar:focus {
              transform: none !important;
            }
            .react-calendar__tile--active {
              background: transparent !important;
              color: inherit !important;
              box-shadow: none !important;
            }
            .react-calendar__tile--now {
              background: #f8f9fa !important;
              color: #2E86C1 !important;
              border: 1.5px solid #2E86C1 !important;
            }
            .react-calendar__month-view__days__day--weekend {
              color: #b03a2e !important;
            }
            .react-calendar__month-view__weekdays {
              text-transform: uppercase;
              font-weight: 700;
              color: #145a8a;
              font-size: 1.15rem;
            }
            .overlap-chi-siamo {
              position: relative;
              z-index: 10;
              margin-top: -60px;
              padding-top: 0;
              padding-bottom: 1.2rem;
              margin-bottom: -48px;
            }
            @media (max-width: 700px) {
              .overlap-chi-siamo {
                margin-top: -30px;
              }
              .cards-container {
                flex-direction: column !important;
                gap: 1.5rem !important;
              }
              .card-clickable {
                display: none !important;
              }
              .card, .card-with-image {
                flex: 1 1 auto !important;
                min-width: 100% !important;
                max-width: 100% !important;
              }
              .card-with-image {
                min-height: auto !important;
              }
              /* Mobile: rimuovi sovrapposizione con hero */
              .overlap-chi-siamo {
                margin-top: 2rem !important;
                margin-bottom: 2rem !important;
              }
              .desktop-calendar {
                display: none !important;
              }
              .mobile-calendar {
                display: block !important;
              }
            }
          `}</style>
    </section>
  )
}

export default ElevatedCards
