import React from "react"
import { Link } from "react-router-dom"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"


const AdminComponent = () => {
  const adminElements = [
    {
      path: "/edittable",
      label: "EDYCJA SAMOCHODY",
      value: "edittable",
    },
    // {
    //   path: "/editdescription",
    //   label: "EDYCJA OPISU",
    //   value: "editdescription",
    // },
    {
      path: "/orders",
      label: "ZAMÓWIENIA",
      value: "orders",
    },
  ]


  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation value={value} showLabels>
      {adminElements.map((element, index) => (
        <BottomNavigationAction
          to={element.path}
          label={element.label}
          icon={element.icon}
          key={index}
          value={element.value}
          component={Link}
        />
      ))}
    </BottomNavigation>
  )
}

export default AdminComponent
