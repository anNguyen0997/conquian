import React from 'react'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    // dispatch(login(username, password))
  }

  return (
    <>
      Login

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Login