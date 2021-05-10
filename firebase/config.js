import firebase from "firebase/app";
import "firebase/storage"; //store images
import "firebase/firestore"; //Cloud firestore
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyCagh_FO0YSfIqYX38SDMWnFB5Scrtc0Cw",
	authDomain: "seorimhwa-project.firebaseapp.com",
	projectId: "seorimhwa-project",
	storageBucket: "seorimhwa-project.appspot.com",
	messagingSenderId: "28523443097",
	appId: "1:28523443097:web:c2a1f2ae919a7d86c89908",
	measurementId: "G-6MFLD0FYS5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const projectStorage = firebase.storage(); //This reference points to the root of Cloud Storage bucket.
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();
export { projectStorage, projectFirestore, timeStamp, projectAuth };
