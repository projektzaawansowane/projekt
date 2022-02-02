import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React, { useEffect, useState } from "react"
import firebase from '../../../LoginComponents/firebase'
import EditGeneration from "./EditGeneration"
import EditEngine from './EditEngine'
import EditAcceleration from "./EditAcceleration"
import EditVmax from './EditVmax'
import EditDrive from "./EditDrive"
import DeleteDescription from "./DeleteDescription"


const EditDescription = () => {
  const [descriptions, setDescription] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("description").get()
      setDescription(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  return (
    <>
    <h1 className="h1cos">Edycja Opisu</h1>
      <div className="tableContainer">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell align="center">Generacja</TableCell>
                <TableCell align="center">Silnik</TableCell>
                <TableCell align="center">Przyśpieszenie</TableCell>
                <TableCell align="center">V-max</TableCell>
                <TableCell align="center">Napęd</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {descriptions.map((description, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {description.model}
                    <DeleteDescription description={description} />
                  </TableCell>
                  <TableCell align="center">
                  <EditGeneration description={description} />
                  </TableCell>
                  <TableCell align="center">
                  <EditEngine description={description} />
                  </TableCell>
                  <TableCell align="center">
                  <EditAcceleration description={description}/>
                  </TableCell>
                  <TableCell align="center">
                  <EditVmax description={description}/>
                  </TableCell>
                  <TableCell align="center">
                  <EditDrive description={description}/>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default EditDescription
