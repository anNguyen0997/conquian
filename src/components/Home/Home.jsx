import React, { useState } from 'react';
import axios from 'axios'

function Home() {

  const [email, setEmail] = useState('')
  const [newValue, setNewValue] = useState(0)

  const handleIncrement = (email) => {
    axios.put('http://localhost:3001/updategameplayed', { gamesplayed: newValue, email: email })
    .then((response) => {
      console.log('updated')
    })
  }


  return (
    <>
      <input type='text' onChange={(e) => {setEmail(e.target.value)}}></input>
      <button onClick={handleIncrement(email)}>update</button>
    </>
  );
}

export default Home;
