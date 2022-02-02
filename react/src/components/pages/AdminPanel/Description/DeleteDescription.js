import React, { useState } from "react"
import firebase from "../../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const DeleteDescription = ({ description }) => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState(description.name)

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection("description").doc(description.id).delete()
  }

  return (
    <>
      {name}
      <div className="buttonedit">
      <Button onClick={onDelete} color="primary" variant="outlined">
        Usuń
      </Button>
      </div>
    </>
  )
}

export default DeleteDescription