import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { set, ref, get, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

const provider = new GoogleAuthProvider();

const database = getDatabase();

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);

  return {
    uid: result.user.uid,
    name: result.user.displayName,
    email: result.user.email
  };
}

export const createUser = (userId, name, email) => {
  const userRef = ref(database, 'users/' + userId);

  get(userRef).then((snapshot) => {
    if (!snapshot.exists()) {
      console.log('createUser');
      set(userRef, {
        name: name,
        email: email,
      });
    }
  }).catch((error) => {
    console.error(error);
  });
}

export {
  auth,
  provider,
  database,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
}