
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleLogin = () => {
    

    axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      Login

      <div>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
          <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>
          <input type="submit" />
          {/* <button onClick={handleLogin}>sign in</button> */}
        </form>
      </div>
    </>
  )
}

export default Login