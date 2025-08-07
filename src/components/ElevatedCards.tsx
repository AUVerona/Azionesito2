import React from 'react'
import { getImagePath } from '../utils/paths'

interface Card {
  icon?: string
  image?: string
  title: string
  description: string
  link?: string
  isExternal?: boolean
}

const cards: Card[] = [
  {
    image: getImagePath('bando-150-ore.jpeg'),
    title: 'Bando 150 Ore UniVR 2025/26',
    description: 'Collaborazione part-time retribuita (8€/ora, max 1.200€) per studenti iscritti entro il 15/10/2025',
    link: 'https://www.instagram.com/p/DM2X84zi0f_/?utm_source=ig_web_copy_link&igsh=MTRoc3JocDU2M3FpNw==',
    isExternal: true
  },
  {

    image: getImagePath('UduUNIVR.jpeg'),
    title: 'UDU',
    description: 'Loro hanno i canali ufficiali. Noi abbiamo la nostra voce, aiutaci a condividere!',
    link: 'https://www.instagram.com/p/DMptevci8KC/?utm_source=ig_web_copy_link',
    isExternal: true
  
  },
  {
    image: getImagePath('AZIONEPIZZA.jpeg'),
    title: 'Azione Universitaria è arrivata a Verona!',
    description: 'A ottobre 2024 è nata la nostra sede veronese con l’obiettivo di costruire una comunità studentesca forte e unita.',
    link: 'https://www.instagram.com/p/DMptevci8KC/?utm_source=ig_web_copy_link',
    isExternal: true
  }

]

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

  return (
    <section className="elevated-cards">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`card ${card.link ? 'card-clickable' : ''} ${card.image ? 'card-with-image' : ''}`}
            onClick={() => handleCardClick(card)}
            style={{ cursor: card.link ? 'pointer' : 'default' }}
          >
            {card.image ? (
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
            ) : (
              <span className="card-icon">{card.icon}</span>
            )}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ElevatedCards
