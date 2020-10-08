import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDIPjJ4YWYghozkgI9VbSlVagDDP4qAF4",
  authDomain: "clone-4f16f.firebaseapp.com",
  databaseURL: "https://clone-4f16f.firebaseio.com",
  projectId: "clone-4f16f",
  storageBucket: "clone-4f16f.appspot.com",
  messagingSenderId: "534233109327",
  appId: "1:534233109327:web:c8af23d6f73cc185caab3a",
  measurementId: "G-5R3L69L2EG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
