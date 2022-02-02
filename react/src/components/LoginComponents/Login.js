import { Button, FormControl, Input, InputLabel } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import firebase from "./firebase"
import "./LoginStyles/Login.css"

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const ErrorPasswordMessage = "Nieprawidłowe hasło!"
  const ErrorEmailMessage = "Nieprawidłowy adres E-mail!"

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const onLogin = async () => {
    clearErrors()
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      props.history.push("/")
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(ErrorEmailMessage)
          break
        case "auth/wrong-password":
          setPasswordError(ErrorPasswordMessage)
          break
        default:
      }
    }
  }

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setEmail(email)
      } else {
        setEmail("")
      }
    })
  }

  useEffect(() => {
    authListener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="main-login">
      <h1>Logowanie</h1>
      <form
        className="form-login"
        onSubmit={(e) => e.preventDefault() && false}
      >
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <p className="errorMsg">{emailError}</p>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Hasło</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <p className="errorMsg">{passwordError}</p>
        <div className="loginbutton">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={onLogin}
          >
            Zaloguj
          </Button>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
        >
          Rejestracja
        </Button>
      </form>
    </main>
  )
}

export default Login
