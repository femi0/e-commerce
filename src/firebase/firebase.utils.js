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

      export const createUserProfileDocument = async(userAuth, additionalData) => {
          if(!userAuth) return;
        
          const userRef = firestore.doc(`users/${userAuth.uid}`); 
          const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        }catch(error){
          console.log( 'error creating user', error.message);
        }
      }

      return userRef;
          
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;