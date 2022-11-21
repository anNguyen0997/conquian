import React,{useState} from 'react'


function Hand({card,index,selectCard,user}) {

  const [isClicked,setClick] = useState(false)

  function handleClick() {
    
    if(user.id == user.turn){
      selectCard(index)

      if(isClicked === false){
        setClick(true)
      }
      else{
        setClick(false)
      }
    }
    else{
      console.log('not your turn')
    }
   
  }
  

  return (
    <div>
       {isClicked ?  
        <div id='selected'>
           <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)}  height='100px' width='75px' onClick={() => handleClick(card)} alt=''></img>
        </div>
        :
        <img src={require(`../../../asset/SpanishPlayingCards/${card.suit+card.value}.jpg`)}  height='100px' width='75px' onClick={() => handleClick(card)} alt=''></img> 
        
        }
    </div>
  )
}

export default Hand