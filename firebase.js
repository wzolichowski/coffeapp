import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "@env";


const firebaseConfig = {
  apiKey: "AIzaSyDfyGuTZnDM30rYfwaom2-AxlqqVtfv76k",
  authDomain: "fir-app-f0726.firebaseapp.com",
  projectId: "fir-app-f0726",
  storageBucket: "fir-app-f0726.firebasestorage.app",
  messagingSenderId: "364542689638",
  appId: "1:364542689638:web:c5537241c68cb1680508a7",
  measurementId: "G-Q3HSMDZF9G"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };