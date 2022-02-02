import React from "react"
import "./App.css"
import ApplicationRouting from "./components/ApplicationRouting/ApplicationRouting"
import AuthProvider from "./components/LoginComponents/AuthProvider"

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <ApplicationRouting />
      </AuthProvider>
    </div>
  )
}

export default App
