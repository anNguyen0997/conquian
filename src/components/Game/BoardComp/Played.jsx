import React from 'react'


function Deck({card}) {
  return (
    <div>
      <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)} alt=' h' height='75px' width='50px'></img>
    </div>
  )
}

export default Deck