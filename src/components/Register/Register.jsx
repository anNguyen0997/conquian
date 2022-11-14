
import React, { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [encryptPassword, setEncryptPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

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