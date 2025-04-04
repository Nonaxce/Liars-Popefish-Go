import { k } from "./engine"    // get kaplay context
import "./loader";              // load all assets on start
import { colors } from "./utils"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8bbqqqeZP2u7iU9t1FxmwwYCGPzn5AG0",
  authDomain: "lpfg-devtest.firebaseapp.com",
  databaseURL: "https://lpfg-devtest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lpfg-devtest",
  storageBucket: "lpfg-devtest.firebasestorage.app",
  messagingSenderId: "1038529881681",
  appId: "1:1038529881681:web:eb328803403ddef504fa70",
  measurementId: "G-6MBNDZHN28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);












k.loadRoot("./");
function getColor(obj : string | number) {
    return k.Color.fromHex(obj)
}

k.scene("menu", () => {})

k.scene("game", () => {})

k.onLoad(() => k.go("menu"))









