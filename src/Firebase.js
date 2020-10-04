import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyDTKcEvF_zjuCODj8FtZmO_B73VtASQDYA",
  authDomain: "messenger-ef115.firebaseapp.com",
  databaseURL: "https://messenger-ef115.firebaseio.com",
  projectId: "messenger-ef115",
  storageBucket: "messenger-ef115.appspot.com",
  messagingSenderId: "931663684647",
  appId: "1:931663684647:web:bdd9b9ed0a44e6a1c71a02",
  measurementId: "G-9KJ5WZ5VTT"
});

const db= firebaseApp.firestore();

export default db;