import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATY0qNHBQq9Cyx3nRWyRkof9GENuyAWvI",
    authDomain: "l1nkstart.firebaseapp.com",
    projectId: "l1nkstart",
    storageBucket: "l1nkstart.appspot.com",
    messagingSenderId: "562960908837",
    appId: "1:562960908837:web:285bac34fd17e9ede0f5cc"
}


//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }