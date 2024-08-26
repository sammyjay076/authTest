// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  initializeAuth,
  onAuthStateChanged,
  PhoneAuthProvider,
  setPersistence,
  getReactNativePersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjsXUO2ShpD2rxXSNIc631rgvdPEJIjI",
  authDomain: "otptest-a9309.firebaseapp.com",
  projectId: "otptest-a9309",
  storageBucket: "otptest-a9309.appspot.com",
  messagingSenderId: "348829755082",
  appId: "1:348829755082:web:15089f751227b6731fb633",
  measurementId: "G-CHYC5F6X2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const analytics = getAnalytics(app);
export const phoneProvider = new PhoneAuthProvider(auth);
