import React, { useState, useRef } from 'react'
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

  // Eventi AU - puoi modificare qui le date e i titoli degli eventi
  const eventiAU = [
    {
      data: '2025-08-29',
      titolo: 'Festa AU',
      descrizione: 'Grande festa di inizio anno AU con musica, cibo e divertimento per tutti!'
    },
    {
      data: '2025-09-12',
      titolo: 'Caffè con i Prof',
      descrizione: 'Incontro informale con i docenti per domande e curiosità.'
    },
    {
      data: '2025-09-20',
      titolo: 'Aperitivo di Benvenuto',
      descrizione: 'Un aperitivo per accogliere tutte le nuove matricole e presentare le attività AU.'
    },
    {
      data: '2025-09-28',
      titolo: 'Giornata Sportiva',
      descrizione: 'Torneo AU di calcio e pallavolo aperto a tutti.'
    },
    {
      data: '2025-10-05',
      titolo: 'Incontro Matricole',
      descrizione: 'Incontro informativo per aiutare le matricole a orientarsi e conoscere l’associazione.'
    },
    {
      data: '2025-10-15',
      titolo: 'Assemblea Studentesca',
      descrizione: 'Riunione aperta a tutti gli studenti per discutere proposte e iniziative.'
    },
    {
      data: '2025-10-22',
      titolo: 'Workshop CV',
      descrizione: 'Laboratorio pratico su come scrivere un curriculum efficace.'
    },
    {
      data: '2025-10-30',
      titolo: 'Serata Pizza AU',
      descrizione: 'Serata conviviale a base di pizza per rafforzare la community AU.'
    },
    {
      data: '2025-11-07',
      titolo: 'Serata Giochi da Tavolo',
      descrizione: 'Divertimento assicurato con giochi da tavolo e premi.'
    },
    {
      data: '2025-11-18',
      titolo: 'Cineforum AU',
      descrizione: 'Proiezione di un film a sorpresa e dibattito finale.'
    },
  ];

  // Date degli eventi in formato Date
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [popupPos, setPopupPos] = useState<{top: number, left: number} | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  // Stato per il mese visualizzato
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  return (
    <section className="elevated-cards" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <div className="cards-container" style={{ display: 'flex', gap: '2rem', alignItems: 'stretch', flexWrap: 'wrap' }}>
        {/* Prima card */}
        <div 
          className={`card card-clickable card-with-image`}
          onClick={() => handleCardClick(primaCard)}
          style={{ cursor: 'pointer', flex: '1 1 280px', maxWidth: 340, minWidth: 260 }}
        >
          <div className="card-image">
            <img src={primaCard.image} alt={primaCard.title} />
          </div>
          <h3>{primaCard.title}</h3>
          <p>{primaCard.description}</p>
        </div>

        {/* Sezione calendario: header mese e calendario in due div separati ma nella stessa card */}
        <div 
          className="card card-with-image" 
          style={{ 
            minHeight: 400, 
            flex: '3 1 600px', 
            maxWidth: '1000px', 
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
                calendarType="iso8601"
                locale="it-IT"
                // Nascondi la label del mese integrata
                navigationLabel={() => null}
                // Aggiorna il mese visualizzato quando si cambia mese
                onActiveStartDateChange={({ activeStartDate }) => {
                  if (activeStartDate) setCurrentMonth(activeStartDate);
                }}
              />
              {/* Popup dettagli evento sopra la cella */}
              {selectedEvent && popupPos && createPortal(
                <>
                  {/* Overlay invisibile solo per chiusura */}
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
                    onClick={() => {
                      setSelectedEvent(null);
                    }}
                  />
                  <div
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
                </>,
                document.body
              )}
            </div>
          </div>

          {/* Modal evento */}
          {/* Stile custom per i giorni evento e calendario */}
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
            .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus {
              background: #eaf6fb;
            }
            .react-calendar__tile {
              border-radius: 12px;
              font-weight: 500;
              font-size: 1.18rem;
              padding: 0.2em 0.3em 0.7em 0.3em;
              height: 60px;
              vertical-align: top;
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
              /* Rimuovi eventuali animazioni e scaling */
              transition: none !important;
              animation: none !important;
            }
            .card:hover, .card-with-image:hover, .card:focus, .card-with-image:focus {
              /* Nessun effetto hover di scaling o allargamento */
              transform: none !important;
              /* L'ombra resta invariata */
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
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default ElevatedCards
