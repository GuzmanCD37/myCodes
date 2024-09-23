import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6cL71-CCN6tFf1xX0CS_2NhAUk1Uabp4",
  authDomain: "im02-prelim-project.firebaseapp.com",
  projectId: "im02-prelim-project",
  storageBucket: "im02-prelim-project.appspot.com",
  messagingSenderId: "979907209217",
  appId: "1:979907209217:web:c34a47ee5737e0f069f800",
  measurementId: "G-WLWDL63VV3"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Get a reference to the database service
  const db = getFirestore();


  document.getElementById('signInWithGoogle').addEventListener('click', () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      window.location.href = 'IM2_PrelimProject/IM2StudentInfo.html';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });
  });