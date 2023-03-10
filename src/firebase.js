//last error was the below line here! "firebase/compat/app"
import firebase from 'firebase/compat/app'
import "firebase/compat/auth" //authentication module so we can actually do auth stuff

const app = firebase.initializeApp( {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
})

// Initialize Firebase
export const auth = app.auth()
export default app