import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDmG3k6tE1rWnNhkeEtvgxX9ThR6e_2iNc",
  authDomain: "enzinproject.firebaseapp.com",
  databaseURL: "https://enzinproject.firebaseio.com",
  projectId: "enzinproject",
  storageBucket: "enzinproject.appspot.com",
  messagingSenderId: "611352939315",
  appId: "1:611352939315:web:71ee10fb7dc4d816974c46",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
