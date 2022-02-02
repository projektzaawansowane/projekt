import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

const PrivateRouteAdmin = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser.email === "admin@admin.com" ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/brakdostepu"} />
        )
      }
    />
  )
}

export default PrivateRouteAdmin
