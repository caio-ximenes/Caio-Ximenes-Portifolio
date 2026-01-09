import React from 'react'
import caricaturaDesktop from '../../../assets/images/caricatura-cordel-1920.webp'


function Hero() {
    const altCaricatura = "Minha caricatura em estilo cordel"

  return (
    <div>
        <picture>
            <img src={caricaturaDesktop} alt={altCaricatura} />
        </picture>
    </div>
  )
}

export default Hero