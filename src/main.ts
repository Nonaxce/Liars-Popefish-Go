import { config } from "./config";           // get firebase api config
import { k } from "./engine";                // get kaplayjs context
import "./loader";                           // load all assets on start
import { log, byteSize, deckStringToArray, deckArrayToString } from "./utils";                        

// Firebase sdk functions
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, set, ref, onDisconnect } from "firebase/database";

// set config
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);




(function() {
    onAuthStateChanged(auth, (user) => {


        if (user.isAnonymous && user) {

        } else {

        }

        // events when user signs in anonymously
        signInAnonymously(auth).then(() => {

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error(errorCode, errorMessage)
        })
    })
})()


























