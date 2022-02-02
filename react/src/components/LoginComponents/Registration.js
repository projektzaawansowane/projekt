import { Button, FormControl, Input, InputLabel } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import firebase from "./firebase"
import "./LoginStyles/Registration.css"

const Registration = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const ErrorPasswordMessage = "Hasło powinno zawierać co najmniej 6 znaków"
  const ErrorEmailMessage = "Adres E-mail jest niepoprawnie sformatowany"

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const onRegister = async () => {
    clearErrors()
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().currentUser.updateProfile({
        email: email,
      })
      props.history.push("/home")
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(ErrorEmailMessage)
          break
        case "auth/weak-password":
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
      <h1>Rejestracja</h1>
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
        <div className="button-registration">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={onRegister}
          >
            Zarejestruj
          </Button>
        </div>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
          >
            Logowanie
          </Button>
        </div>
      </form>
    </main>
  )
}

export default Registration
