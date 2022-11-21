import React,{useState} from 'react'
import Hand from './Hand'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



function Player({player,moves,ctx}) {

    const [characters, updateCharacters] = useState(player.hand);
    
    let turn = true

    if(ctx.turn > 6) {
      turn = false
    }
    

    function handleGive() {
        if(player.selected.length === 1){
            moves.giveCard(player.hand.indexOf(player.selected[0]))
        }
        else{
            alert('Must select one card.')
        }
    }

    function handleTake() {
        moves.takeCard()
    }

    function handleSortN() {
        moves.sortDeckByValue()
    }

    function handleSortS() {
        moves.sortDeckBySuit()
    }

    function handleDraw() {
        moves.drawCard()
    }

    function handlePass() {
        moves.passCard()
    }

    function handleEndRound() {
        moves.endRound()
    }

    function handlePay() {
        if(player.selected.length === 1){
            moves.payCard(player.hand.indexOf(player.selected[0]))
        }
        else{
            alert('Must select one card.')
        }
    }

    

    

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction='horizontal'>
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef} id='deck' >
                {player.hand.map((cardObj, index) => {
                  return (
                    <Draggable key={cardObj.id} draggableId={cardObj.id} index={index} direction='horizontal'>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Hand  key={cardObj.suit+cardObj.value} card={cardObj} index={index} selectCard={moves.selectCard} user={{id:player.id,turn:ctx.currentPlayer}}/>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul> 
            )}
          </Droppable>
        </DragDropContext>

        {turn ? 
        <>
          <button onClick={handleGive}>Give Card</button>
          <button onClick={handleTake}>Take Card</button>
          <button onClick={handleSortN}>Sort By Number</button>
          <button onClick={handleSortS}>Sort By Suit</button>
        </>
        :
        <>
          <button onClick={handleSortN}>Sort By Number</button>
          <button onClick={handleSortS}>Sort By Suit</button>
          <button onClick={handleDraw}>Draw Card</button>
          <button onClick={handlePass}>Pass</button>
          <button onClick={handleEndRound}>End Turn</button>
          <button onClick={handlePay}>Pay Card</button>
        </>}
        
        
    </div>
  )
}

export default Player