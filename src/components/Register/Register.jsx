
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    // if passwords do not match
    if (input.password !== input.confirmPassword) { 
      setMatchPasswords('Please make sure passwords match.')
    } else {
      // register user if passwords match
      axios.post('http://localhost:3001/register', {
        username: input.username,
        email: input.email,
        password: input.password
      }).then((response) => {
        if (response.data.message === 'This email already exists.') {
          console.log(response.data)
          setEmailExists(response.data.message)
        } else if (response.data.message === 'registration successful') {
          navigate('/login')
          console.log(response.data)
          // resetting inputs to empty strings
          setInput({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
        }
      })
    }
  }

  // states for existing emails and matching password status
  const [emailExists, setEmailExists] = useState("")
  const [matchPasswords, setMatchPasswords] = useState("")

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
   
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
   
      switch (name) {
        case "username":
          if (!value) {
            // stateObj[name] = "Please enter Username.";
          }
          break;
   
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
   
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
   
        default:
          break;
      }
   
      return stateObj;
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/1196/1196947.png?w=1380&t=st=1668543218~exp=1668543818~hmac=59bc6b79f393991366d34617665a939bbe679b5a63c2df6c15bf4d333fed2f5a"
            alt=""
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>

        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleRegister}>

            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={input.username}
                    pattern="^[a-zA-Z0-9]{2,20}$"
                    title="Must not include special characters."
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                  {error.username && <span className='err'>{error.username}</span>}
                </div>
              </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={input.email}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                   {error.email && <span className='err'>{error.email}</span>}
                </div>
              </div>

              <h4>{emailExists}</h4>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={input.password}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$" 
                    title="Must contain at least one letter and one number, character min-max(6 - 20)"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                  {error.password && <span className='err'>{error.password}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="confirm-current-Password"
                    required
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                  {/* {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
                  <h4>{matchPasswords}</h4>
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
            </form>

            <p  className="mt-6 relative flex justify-center text-sm font-medium text-gray-700"> Have an account already?  <Link to="/login" className='indent-1 underline underline-offset-1 text-red-500'>  Log in.</Link> </p>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </a>
                </div>

                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register