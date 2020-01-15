/**
 * <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
 */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFf-9CYTC5HK00YFvlN4zIzJuJhgqpEsg",
    authDomain: "alma-sharie.firebaseapp.com",
    databaseURL: "https://alma-sharie.firebaseio.com",
    projectId: "alma-sharie",
    storageBucket: "alma-sharie.appspot.com",
    messagingSenderId: "539080518196",
    appId: "1:539080518196:web:45d3f432c58a227394f861",
    measurementId: "G-Y1RF62M1ZD"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;