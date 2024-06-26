import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVwOhK3LgNllULO0RSh05Q_rGP9XksZ5M",
  authDomain: "nextcode-45954.firebaseapp.com",
  projectId: "nextcode-45954",
  storageBucket: "nextcode-45954.appspot.com",
  messagingSenderId: "67567006493",
  appId: "1:67567006493:web:fc8aa80d4aca03763427f4",
  measurementId: "G-1YXW845YFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithRedirect(auth, provider)
    .then((result) => {
      // IdP data available using getAdditionalUserInfo(result)
      console.log(result);

      // ...
    })
    .catch((error) => {
      console.log("error");
      // ...
    });
