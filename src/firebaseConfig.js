import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAk4fCoyid_gZCrqIZEgD6-UzjSP1N7JjQ",
  authDomain: "asyprer-test.firebaseapp.com",
  databaseURL: "https://asyprer-test-default-rtdb.firebaseio.com",
  projectId: "asyprer-test",
  storageBucket: "asyprer-test.appspot.com",
  messagingSenderId: "642078077258",
  appId: "1:642078077258:web:57a8886ae7dc95dcb311b3",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
const dbConnect = fireDb.database().ref();
export default dbConnect;
