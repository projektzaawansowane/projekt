import React, { useState } from "react"
import firebase from '../../../LoginComponents/firebase'
import { Button } from "@material-ui/core"

const EditEngine = ({ description }) => {
  const [engine, setEngine] = useState(description.engine)

  const onUpdateEngine = () => {
    const db = firebase.firestore()
    db.collection("description")
      .doc(description.id)
      .set({ ...description, engine })
  }

  return (
    <>
      <input
        value={engine}
        onChange={(e) => {
            setEngine(e.target.value)
        }}
      />
      <div className="buttonedit">
      <Button onClick={onUpdateEngine} color="primary" variant="outlined">
        Edytuj
      </Button>
      </div>
    </>
  )
}

export default EditEngine
