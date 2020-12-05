import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBXk5IZMCfzCNSE7iN-mlfVt-izTIj0p7I",
  authDomain: "wireless-buzzer-8825f.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-8825f.firebaseio.com",
  projectId: "wireless-buzzer-8825f",
  storageBucket: "wireless-buzzer-8825f.appspot.com",
  messagingSenderId: "374750625936",
  appId: "1:374750625936:web:8f405b7f06076161359815",
  measurementId: "G-BDMWPLG6M3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
