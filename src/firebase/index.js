import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { createStore, combineReducers } from 'redux'
import {
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const firebaseConfig = {
    apiKey: "AIzaSyCkVF9lIm5rxEgTfmNnfs5f5L-2UxhUqnU",
    authDomain: "panzen-app.firebaseapp.com",
    projectId: "panzen-app",
}

// react-redux-firebase config
const rrfConfig = {}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
export const store = createStore(rootReducer, initialState)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}