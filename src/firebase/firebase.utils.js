import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjy8XpANu1_wkrH23tIRTa6u6DDEXIQbk",
  authDomain: "crown-db-63716.firebaseapp.com",
  databaseURL: "https://crown-db-63716.firebaseio.com",
  projectId: "crown-db-63716",
  storageBucket: "",
  messagingSenderId: "570075050736",
  appId: "1:570075050736:web:3a73cdcd43a3af3e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
