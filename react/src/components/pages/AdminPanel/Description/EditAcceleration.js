import React, { useState } from "react"
import firebase from '../../../LoginComponents/firebase'
import { Button } from "@material-ui/core"

const EditAcceleration = ({ description }) => {
  const [acceleration, setAcceleration] = useState(description.acceleration)

  const onUpdateAcceleration = () => {
    const db = firebase.firestore()
    db.collection("description")
      .doc(description.id)
      .set({ ...description, acceleration })
  }

  return (
    <>
      <input
        value={acceleration}
        onChange={(e) => {
            setAcceleration(e.target.value)
        }}
      />
      <div className="buttonedit">
      <Button onClick={onUpdateAcceleration} color="primary" variant="outlined">
        Edytuj
      </Button>
      </div>
    </>
  )
}

export default EditAcceleration
