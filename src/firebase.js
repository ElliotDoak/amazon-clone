import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAF7FtrPuyn31IVgzhsRSpK8XqAB5-i69k",
    authDomain: "clone-b17c7.firebaseapp.com",
    projectId: "clone-b17c7",
    storageBucket: "clone-b17c7.appspot.com",
    messagingSenderId: "1075521829211",
    appId: "1:1075521829211:web:bf5752f6307ffbfbdd427e",
    measurementId: "G-DPNYQW9LGV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();

  export { db, auth };