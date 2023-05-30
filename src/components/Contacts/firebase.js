import firebase from 'firebase';

const firebaseConfig = {
  
  apiKey: "AIzaSyA2BDD3lWT3mYfyTQgxPXi6hFV2xvp72fA",
  authDomain: "portf-a220f.firebaseapp.com",
  databaseURL: "https://portf-a220f-default-rtdb.firebaseio.com",
  projectId: "portf-a220f",
  storageBucket: "portf-a220f.appspot.com",
  messagingSenderId: "835328212370",
  appId: "1:835328212370:web:2a913dd5e95c7e0d70554b",
  measurementId: "G-5QD4BFQD01"

 
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;