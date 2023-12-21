
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCE44dacSKTTzbZLXRsQDOl_oEQVrGhmDA",
  authDomain: "messageapp-5d5a5.firebaseapp.com",
  projectId: "messageapp-5d5a5",
  storageBucket: "messageapp-5d5a5.appspot.com",
  messagingSenderId: "477899909522",
  appId: "1:477899909522:web:dc130b361e558b87f1394b",
  measurementId: "G-GJN7FH1N87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage }; 


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from 'firebase/storage';
// const firebaseConfig = {
//   apiKey: "AIzaSyCwRcVXnsCyYVmsjMXiTxkVWumHAaOnlIU",
//   authDomain: "next-firebase-auth-5e5a2.firebaseapp.com",
//   projectId: "next-firebase-auth-5e5a2",
//   storageBucket: "next-firebase-auth-5e5a2.appspot.com",
//   messagingSenderId: "602634842121",
//   appId: "1:602634842121:web:01d31f7a75f287118588d8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// export { auth, db, storage }; 