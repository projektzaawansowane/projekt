import React, { useContext } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BottomComponent from "../../elements/BottomComponent"
import BottomComponentAdmin from "../../elements/BottomComponentAdmin"
import BottomComponentUser from "../../elements/BottomComponentUser"
import { AuthContext } from "../LoginComponents/AuthProvider"
import Home from "../LoginComponents/Home"
import Login from "../LoginComponents/Login"
import PrivateRoute from "../LoginComponents/PrivateRoute"
import Registration from "../LoginComponents/Registration"
import AdminPanel from "../pages/AdminPanel/AdminPanel"
import EditTable from "../pages/AdminPanel/EditTable"
import Orders from "../pages/AdminPanel/Orders"
import TestDrive from "../pages/TestDrive/TestDrive"
import Cars from "../pages/Cars"
import HomePage from "../pages/HomePage/HomePage"
import MyOrders from "../pages/UserAccount/MyOrders"
import "./ApplicationRouting.css"

const ApplicationRouting = () => {
  const { currentUser } = useContext(AuthContext)
  const Navbar = () => {
    if (currentUser) {
      if (currentUser.email === "admin@admin.com") {
        return <BottomComponentAdmin />
      } else {
        return <BottomComponentUser />
      }
    } else {
      return <BottomComponent />
    }
  }

  return (
    <Router>
      <div className="bottom-navigation">
        <Navbar />
      </div>
      <Route path="/" exact component={HomePage} />
      <Route path="/testdrive" component={TestDrive} />
      <Route path="/cars" component={Cars} />
      <Route path="/edittable" component={EditTable} />
      <Route path="/orders" component={Orders} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <PrivateRoute path="/adminpanel" component={AdminPanel} />
      <PrivateRoute path="/myorders" component={MyOrders} />
    </Router>
  )
}

export default ApplicationRouting
