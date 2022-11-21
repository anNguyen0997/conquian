import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = "269164557592-hvtut2am4ug66qhmpcrstqnh9lje41g5.apps.googleusercontent.com"

export default function GoogleLoginFunction() {

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  }
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonTExt="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
      </div>
  )
}
