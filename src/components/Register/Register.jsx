
import React, { useState } from 'react'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid' 

const Register = () => {

  // const [id, setID] = useState("")
  const [email, setEmail] = useState("")
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  
  const handleRegister = () => {

    axios.post('http://localhost:3001/register', {
      // id: id,
      username: usernameReg,
      email: email,
      password: passwordReg
    }).then(() => {
      console.log("success")
    })

    // setID("")
    setEmail("")
    setUsernameReg("")
    setPasswordReg("")
  }

  return (
    <>
      Register

      <div>
        <form onSubmit={handleRegister}>

          {/* <input type="number" placeholder="id" onChange={(e) => {setID(e.target.value)}}/> */}
          <input type="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
          <input type="text" placeholder="username" onChange={(e) => {setUsernameReg(e.target.value)}}/>
          <input type="password" placeholder="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>

          <input type="submit"/>
          {/* <button onClick={handleRegister}>sign up</button> */}

        </form>
      </div>
    </>
  )
}

export default Register