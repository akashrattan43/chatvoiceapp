import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDjeZw3zqGBA4pXGzeQPzyofkpSDGNlRyI",
    authDomain: "chatb-87726.firebaseapp.com",
    projectId: "chatb-87726",
    storageBucket: "chatb-87726.appspot.com",
    messagingSenderId: "332922409747",
    appId: "1:332922409747:web:5786100534eddacc2700e6",
    measurementId: "G-K3GKVWYBDE"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();