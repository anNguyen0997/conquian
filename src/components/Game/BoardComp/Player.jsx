import React from 'react'
import Played from './Played'
import Hand from './Hand'


function Player({player}) {
  return (
    <div>
        Name: {player.id}
        <div id='deck'>
            {player.cardsDown.map(cardObj => {
                return <Played key={cardObj.suit+cardObj.value} card={cardObj} />
            })}
        </div>
        <div id='deck'>
            {player.hand.map(cardObj => {
                return <Hand  key={cardObj.suit+cardObj.value} card={cardObj} />
            })}
        </div>
    </div>
  )
}

export default Player