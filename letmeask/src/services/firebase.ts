import firebase from "firebase";

import "firebase/auth";
import "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBOiezN_XTXcFNQkwyM-o3GtT66vkmyTvE",
  authDomain: "letmeask-b1da4.firebaseapp.com",
  databaseURL: "https://letmeask-b1da4-default-rtdb.firebaseio.com",
  projectId: "letmeask-b1da4",
  storageBucket: "letmeask-b1da4.appspot.com",
  messagingSenderId: "549988659939",
  appId: "1:549988659939:web:e4aeb0c615564a87e30bd6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, database, provider, firebaseConfig };
