import React from 'react'

function Hand({card}) {
  return (
    <div>
        <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)}  height='50px' width='25px'></img>
    </div>
  )
}

export default Hand