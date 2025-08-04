import React from 'react'

interface Card {
  icon: string
  title: string
  description: string
}

const cards: Card[] = [
  {
    icon: '📚',
    title: 'Risorse di Studio',
    description: 'Accedi a materiali di studio, appunti condivisi e guide complete per i tuoi esami universitari.'
  },
  {
    icon: '👥',
    title: 'Comunità Studentesca',
    description: 'Entra a far parte di una comunità attiva di studenti pronti a supportarsi a vicenda.'
  },
  {
    icon: '🎯',
    title: 'Obiettivi Comuni',
    description: 'Lavoriamo insieme per raggiungere i nostri obiettivi accademici e professionali.'
  }
]

const ElevatedCards: React.FC = () => {
  return (
    <section className="elevated-cards">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <span className="card-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ElevatedCards
