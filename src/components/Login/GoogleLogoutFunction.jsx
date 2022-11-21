import { GoogleLogout } from 'react-google-login'

const clientId = "269164557592-hvtut2am4ug66qhmpcrstqnh9lje41g5.apps.googleusercontent.com"

export default function GoogleLogoutFunction() {

  const onSuccess = () => {
    console.log("LOG OUT SUCCESSFUL!");
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonTExt="Logout"
        onLogoutSuccess={onSuccess}
        />
      </div>
  )
}
