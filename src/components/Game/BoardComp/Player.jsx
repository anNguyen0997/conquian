import React from 'react'
import Hand from './Hand'



function Player({player,moves}) {

    let selectedCards = []

    function handleGive() {
        if(selectedCards.length === 1){
            moves.giveCard(selectedCards[0])
        }
    }

    function handleClick(i) {
        selectedCards.push(i)
        console.log(selectedCards)
    }

  return (
    <div>
        Name: {player.id}
        <div id='deck'>
            {player.hand.map((cardObj) => {
                let i = player.hand.indexOf(cardObj)
                return <Hand  key={cardObj.suit+cardObj.value} card={cardObj} index={i}  handleClick={handleClick}/>
            })}
        </div>
        <button onClick={handleGive}>Give Card</button>
    </div>
  )
}

export default Player