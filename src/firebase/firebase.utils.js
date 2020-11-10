import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqaaft1QXZfaxEJkBoyYb4ZBpvQjvcjHk",
  authDomain: "crown-db-70e87.firebaseapp.com",
  databaseURL: "https://crown-db-70e87.firebaseio.com",
  projectId: "crown-db-70e87",
  storageBucket: "crown-db-70e87.appspot.com",
  messagingSenderId: "214999347217",
  appId: "1:214999347217:web:df2d5425c0c02d980401b0",
  measurementId: "G-M6G7WQYHT6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
