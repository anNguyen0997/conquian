
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [encryptPassword, setEncryptPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/register', {
      username: username,
      email: email,
      password: password
    }).then(() => {
      console.log("success")
    })

    const addingUser = () => {
      // dispatch (addUser(email, username, encryptPassword))

    }

    setEmail("")
    setUsername("")
    setPassword("")
    setEncryptPassword("")
  }

  return (
    <>
      Register

      <div>
        <form onSubmit={handleSubmit}>

          <input type="email" placeholder="email" />
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />

          <input type="submit"/>

        </form>
      </div>
    </>
  )
}

export default Register