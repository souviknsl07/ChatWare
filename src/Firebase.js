import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCd1rGQNED_rr15IepZ9VTDV1Uvpfbn1Zs",
  authDomain: "chatware-a334c.firebaseapp.com",
  projectId: "chatware-a334c",
  storageBucket: "chatware-a334c.appspot.com",
  messagingSenderId: "84139593768",
  appId: "1:84139593768:web:561871bc147636d449e51d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

export default db;