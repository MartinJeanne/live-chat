import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDr2QEZJWu4Q7F4QELlowJw4xT-7VckOVM",
    authDomain: "reaction-timer-5124d.firebaseapp.com",
    projectId: "reaction-timer-5124d",
    storageBucket: "reaction-timer-5124d.appspot.com",
    messagingSenderId: "867268321260",
    appId: "1:867268321260:web:18b9fb2b6c84e5bff86ac9"
}


//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }