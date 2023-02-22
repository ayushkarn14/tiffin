// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpE2lvJ0Mo3l-YAUo2qqA8Huq2JZz4UMc",
  authDomain: "tiffin-bdce5.firebaseapp.com",
  projectId: "tiffin-bdce5",
  storageBucket: "tiffin-bdce5.appspot.com",
  messagingSenderId: "343099813980",
  appId: "1:343099813980:web:a073b34c740665c2fef699",
  measurementId: "G-S8M05G38S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
const db = getFirestore(app);

export const auth = getAuth(app);
