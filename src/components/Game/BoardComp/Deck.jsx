import React from 'react'

function Deck({card}) {
  return (
    <div>
      <img src={require(`./SpanishPlayingCards/${card.suit+card.value}.jpg`)} alt=' h' height='100px' width='50px'></img>
    </div>
  )
}

export default Deck