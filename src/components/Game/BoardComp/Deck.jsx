import React from 'react'

function Deck({card}) {
  return (
    <div>
      <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)} alt=' h' height='125px' width='100px'></img>
    </div>
  )
}

export default Deck