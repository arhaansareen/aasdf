import firebase from 'firebase';
//require('@firebase/firestore');



const firebaseConfig = {
  apiKey: "AIzaSyAm4Q3ECDwMQZiUGHZV35rEMoGTt0LFUGI",
  authDomain: "library-app-a26ad.firebaseapp.com",
  projectId: "library-app-a26ad",
  storageBucket: "library-app-a26ad.appspot.com",
  messagingSenderId: "263672693415",
  appId: "1:263672693415:web:475960f9e5fb75958c9182"
};

if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.firestore()