
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqEIMguywoOeGWcauBb9txa081Sfu_PFs",
  authDomain: "swiggy-clone-965f8.firebaseapp.com",
  projectId: "swiggy-clone-965f8",
  storageBucket: "swiggy-clone-965f8.appspot.com",
  messagingSenderId: "968372207892",
  appId: "1:968372207892:web:fa97954ddc571a6c474201"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);