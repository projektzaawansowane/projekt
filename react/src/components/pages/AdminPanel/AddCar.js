import React, { useState, useEffect } from "react"
// import firebase from "../../LoginComponents/firebase"
import { Button } from "@material-ui/core"
import firebase from "firebase/app"
import './AddCar.css'
import axios from "axios"

const AddCar = ({ cars }) => {
  // eslint-disable-next-line no-unused-vars
  const [calendardate, setCalendardate] = useState()
  const [hp, setHp] = useState()
  const [name, setName] = useState()
  const [seats, setSeats] = useState()
  const [year, setYear] = useState()
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    return () => {
      setUrl('')
    };
  },[]);


  const onCreate = () => {
    const db = firebase.firestore()
    const newDocRef = db.collection("cars").doc()
    // console.log(url);
      newDocRef.set({calendardate: firebase.firestore.FieldValue.arrayUnion(calendardate),image: url, id: newDocRef.id, hp: hp, name: name, seats: seats, year: year})
  }


  const handleUpload = async (image) => {
    setLoading(true)
    console.log(image);
    const formData = new FormData();
    formData.append('photo', image);
    formData.append('width', '480');
    formData.append('height', '320');
    formData.append('quality', '0.9');

    const photoPromise = axios.post("http://localhost:8080/compress", formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
        responseType: "blob"
    })
    const blob = (await photoPromise).data;
    await firebase.storage().ref(image.name).put(blob);
    setLoading(false)
    if(!loading){
      getImageUrl(image)
    }
  }

  const getImageUrl = async (image) => {
    const ref = firebase.storage().refFromURL('gs://projektzaawansowane-19f12.appspot.com').child(image.name)
   await ref.getDownloadURL().then(imageurl => {
      setUrl(imageurl)
    }).catch((error) => {
      console.log(error);
    })
    // console.log(image.name);
  }

  const handleChange = (event) => {
    const files = event.target.files
    handleUpload(files[0])
  }

  return (
    <>
      <div className="inputy">
        <h1>Dodaj Samochód</h1>
      <h4 className="h4input">Calendardate</h4>
        <input value={calendardate} onChange={(e) => setCalendardate(e.target.value)}/>
        <h4 className="h4input">Moc w KM</h4>
        <input value={hp} onChange={(e) => setHp(e.target.value)}/>
        <h4 className="h4input">Samochód</h4>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <h4 className="h4input">Ilość miejsc</h4>
        <input value={seats} onChange={(e) => setSeats(e.target.value)}/>
        <h4 className="h4input">Rok</h4>
        <input value={year} onChange={(e) => setYear(e.target.value)}/>
        <h4 className="h4input">Dodaj zdjecie</h4>
        <input type="file" onChange={handleChange}/>
        </div>
        <div className="buttonedit">
        {url !== '' &&       
        <Button onClick={onCreate} color="primary" variant='contained'>
        Dodaj nowe auto
      </Button>}
      </div>
    </>
  )
}

export default AddCar
