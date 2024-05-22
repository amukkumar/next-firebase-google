import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvWlmXQ89TVVH8p1HA0wJMthO8Wu4m4xM",
  authDomain: "todo-app-a5644.firebaseapp.com",
  projectId: "todo-app-a5644",
  storageBucket: "todo-app-a5644.appspot.com",
  messagingSenderId: "541210037443",
  appId: "1:541210037443:web:3d61d23d0c344d2edb2676"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
