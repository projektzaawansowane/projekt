import React, { useState } from "react"
import firebase from '../../../LoginComponents/firebase'
import { Button } from "@material-ui/core"

const EditDrive = ({ description }) => {
  const [drive, setDrive] = useState(description.drive)

  const onUpdateDrive = () => {
    const db = firebase.firestore()
    db.collection("description")
      .doc(description.id)
      .set({ ...description, drive })
  }

  return (
    <>
      <input
        value={drive}
        onChange={(e) => {
            setDrive(e.target.value)
        }}
      />
      <div className="buttonedit">
      <Button onClick={onUpdateDrive} color="primary" variant="outlined">
        Edytuj
      </Button>
      </div>
    </>
  )
}

export default EditDrive
