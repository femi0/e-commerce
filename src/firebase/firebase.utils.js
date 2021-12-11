import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={

        apiKey: "AIzaSyCTqnFe8AX0ebDODofrvnCy4jw7IMqHlBY",
        authDomain: "e-commerce-db-fa304.firebaseapp.com",
        projectId: "e-commerce-db-fa304",
        storageBucket: "e-commerce-db-fa304.appspot.com",
        messagingSenderId: "897878486924",
        appId: "1:897878486924:web:ac32cb13f9e83f73e170a9",
        measurementId: "${config.measurementId}"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;