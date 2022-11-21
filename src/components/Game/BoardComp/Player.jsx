import React,{useState} from 'react'
import Hand from './Hand'


function Player({player,moves,ctx}) {
    
    let turn = true

    if(ctx.turn > 6) {
      turn = false
    }
    

    function handleGive() {

        if(player.selected.length === 1){

          let newList = player.hand.map(card => {
            return JSON.stringify(card)
          })
          let newItem = JSON.stringify(player.selected[0])

          console.log(newList.indexOf(newItem))

          moves.giveCard(newList.indexOf(newItem))
        }
        else{
            alert('Must select one card.')
        }
    }

    function handlePay() {
        if(player.selected.length === 1){
          let newList = player.hand.map(card => {
            return JSON.stringify(card)
          })
          let newItem = JSON.stringify(player.selected[0])

          console.log(newList.indexOf(newItem))

          moves.payCard(newList.indexOf(newItem))
        }
        else{
            alert('Must select one card.')
        }
    }


  return (
    <div>
        <ul className="characters" id='deck' >
            {player.hand.map((cardObj, index) => {
              return (
                <li>
                    <Hand  key={cardObj.suit+cardObj.value} card={cardObj} index={index} selectCard={moves.selectCard} user={{id:player.id,turn:ctx.currentPlayer}}/>
                </li>
              )})
            }
        </ul>
         

        {turn ? 
        <>
          <button onClick={handleGive}>Give Card</button>
          <button onClick={moves.takeCard()}>Take Card</button>
          <button onClick={moves.sortDeckByValue()}>Sort By Number</button>
          <button onClick={moves.sortDeckBySuit()}>Sort By Suit</button>
        </>
        :
        <>
          <button onClick={moves.sortDeckByValue()}>Sort By Number</button>
          <button onClick={moves.sortDeckBySuit()}>Sort By Suit</button>
          <button onClick={ moves.drawCard()}>Draw Card</button>
          <button onClick={moves.passCard()}>Pass</button>
          <button onClick={moves.endRound()}>End Turn</button>
          <button onClick={handlePay}>Pay Card</button>
        </>}
        
        
    </div>
  )
}

export default Player