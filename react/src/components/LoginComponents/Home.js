import { Button, Typography } from "@material-ui/core"
import React, { useContext } from "react"
import { AuthContext } from "../LoginComponents/AuthProvider"
import firebase from "../LoginComponents/firebase"
import Login from "../LoginComponents/Login"
import "./LoginStyles/Home.css"

const Home = (props) => {
  const { currentUser } = useContext(AuthContext)

  const onSignout = async () => {
    await firebase.auth().signOut()
    props.history.push("/")
  }

  const Navbar = () => {
    if (currentUser) {
      return (
        <>
            <Typography component="h1" variant="h5">
              {`${firebase.auth().currentUser.email}`}
            </Typography>
            <div className="buttonedit">
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              className="submit-dashboard"
              onClick={onSignout}
            >
              Wyloguj
            </Button>
            </div>
        </>
      )
    } else {
      return <Login />
    }
  }

  return (
    <main className="main-home">
      <div className="home-button"></div>
      <div>
        <Navbar />
      </div>
    </main>
  )
}

export default Home
