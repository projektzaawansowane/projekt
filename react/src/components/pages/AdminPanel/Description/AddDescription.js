import React, { useState } from "react"
import firebase from "../../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const AddDescription = ({ description }) => {
  // eslint-disable-next-line no-unused-vars
  const [newmodel, setNewmodel] = useState()
  const [generation, setGeneration] = useState()
  const [acceleration, setAcceleration] = useState()
  const [drive, setDrive] = useState()
  const [engine, setEngine] = useState()
  const [vmax, setVmax] = useState()
  const onCreate = () => {
    const db = firebase.firestore()
    db.collection("description").add({model: newmodel, generation: generation, acceleration: acceleration, drive: drive, engine: engine, vmax: vmax})
  }

  return (
    <>
    <div className="inputy">
      <h1>Dodaj Opis Samochodu</h1>
    <h4 className="h4input">Model</h4>
        <input value={newmodel} onChange={(e) => setNewmodel(e.target.value)}/>
        <h4 className="h4input">Generacja</h4>
        <input value={generation} onChange={(e) => setGeneration(e.target.value)}/>
        <h4 className="h4input">Przyśpieszenie</h4>
        <input value={acceleration} onChange={(e) => setAcceleration(e.target.value)}/> 
        <h4 className="h4input">Napęd</h4>
        <input value={drive} onChange={(e) => setDrive(e.target.value)}/> 
        <h4 className="h4input">Silnik</h4>
        <input value={engine} onChange={(e) => setEngine(e.target.value)}/> 
        <h4 className="h4input">V-max</h4>
        <input value={vmax} onChange={(e) => setVmax(e.target.value)}/> 
        </div>
        <div className="buttonedit">
      <Button onClick={onCreate} color="secondary" variant='contained'>
        Dodaj
      </Button>
      </div>
    </>
  )
}

export default AddDescription
