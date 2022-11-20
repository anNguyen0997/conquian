import React from 'react'
import Deck from './Deck'
import Played from './Played'


function GameArea({G,playerID,ctx}) {

    let order = []
    
    if(playerID === '0'){
        order = [0,1,2]
    }
    else if (playerID === '1'){
        order = [1,2,0]
    }
    else{
        order = [2,0,1]
    }

  return (
    <>

        <div id='Oppenents'>
            <div id='deck'>
                Player: {order[2] +1}
                {G.players[order[2]].cardsDown.map(cardObj => {
                    return <Played key={cardObj.suit+cardObj.value} card={cardObj} />
                })}
            </div>

            <div id='deck'>
                Player: {order[1]+1}
                {G.players[order[1]].cardsDown.map(cardObj => {
                    return <Played key={cardObj.suit+cardObj.value} card={cardObj} />
                })}
            </div>
        </div>

        <div id='theDeck'>
            <> Players {ctx.playOrderPos + 1} turn </>
            <Deck card={G.stageCard}/>
            <> Winner {G.winner} </>
        </div>

        <div id='PlayerCards'>
            <div id='deck'>
                Player: {order[0] +1}   
                {G.players[order[0]].cardsDown.map(cardObj => {
                    return <Played key={cardObj.suit+cardObj.value} card={cardObj} />
                })}
            </div>
        </div>

    </>
  )
}

export default GameArea

