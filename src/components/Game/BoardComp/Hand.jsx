import React from 'react'


function Hand({card,index,handleClick}) {

  

  return (
    <div>
        <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)}  height='50px' width='25px' onClick={() => handleClick(index)}></img>
    </div>
  )
}

export default Hand