import React from 'react'

interface Highlight {
  icon: string
  title: string
  description: string
}

const highlights: Highlight[] = [
  {
    icon: '🎓',
    title: 'Supporto Accademico',
    description: 'Offriamo tutoraggio, materiali di studio e supporto per esami e progetti universitari.'
  },
  {
    icon: '🤝',
    title: 'Comunità Attiva',
    description: 'Una rete di studenti pronti ad aiutarsi a vicenda e condividere esperienze.'
  },
  {
    icon: '🌟',
    title: 'Crescita Personale',
    description: 'Eventi, workshop e opportunità per sviluppare competenze e costruire il proprio futuro.'
  }
]

const ChiSiamo: React.FC = () => {
  return (
    <section className="chi-siamo" id="chi-siamo">
      <div className="chi-siamo-container">
        <h2>Chi Siamo</h2>
        <div className="chi-siamo-content">
          <div className="chi-siamo-text">
            <h3>La nostra missione</h3>
            <p>
              Siamo un'associazione studentesca dedicata a supportare e guidare gli studenti universitari 
              nel loro percorso accademico. La nostra passione è creare una comunità inclusiva dove ogni 
              studente possa trovare il supporto di cui ha bisogno.
            </p>
            <p>
              Crediamo nel potere della collaborazione e nell'importanza di condividere conoscenze ed 
              esperienze per crescere insieme come comunità universitaria.
            </p>
          </div>
          <div className="chi-siamo-image">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=400&fit=crop" 
              alt="Studenti universitari"
            />
          </div>
        </div>
        
        <div className="highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <h4>{highlight.icon} {highlight.title}</h4>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo
