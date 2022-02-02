import React from "react"
import "../styles/AdminPanel.css"
import AdminComponent from "./AdminComponent"

const AdminPanel = () => {
  return (
    <>
      <h1 className="adminpanel-h1">Panel Admina</h1>
      <div>
        <AdminComponent />
      </div>
    </>
  )
}

export default AdminPanel
