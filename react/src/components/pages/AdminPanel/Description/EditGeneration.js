import React, { useState } from "react"
import firebase from '../../../LoginComponents/firebase'
import { Button } from "@material-ui/core"

const EditGeneration = ({ description }) => {
  const [generation, setGeneration] = useState(description.generation)

  const onUpdateGeneration = () => {
    const db = firebase.firestore()
    db.collection("description")
      .doc(description.id)
      .set({ ...description, generation })
  }

  return (
    <>
      <input
        value={generation}
        onChange={(e) => {
            setGeneration(e.target.value)
        }}
      />
      <div className="buttonedit">
      <Button onClick={onUpdateGeneration} color="primary" variant="outlined">
        Edytuj
      </Button>
      </div>
    </>
  )
}

export default EditGeneration
