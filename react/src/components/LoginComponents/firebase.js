import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyBLu34N_e_ziHVyEjEVJZpz0riceh6qPrE",
  authDomain: "projektzaawansowane-19f12.firebaseapp.com",
  projectId: "projektzaawansowane-19f12",
  storageBucket: "projektzaawansowane-19f12.appspot.com",
  messagingSenderId: "515438218900",
  appId: "1:515438218900:web:53325cc13f5f7a35a86e81"
}

const firebase = app.initializeApp(config)

export default firebase
