import { k } from "./engine"    // get kaplay context
import "./loader";              // load all assets on start
import {} from "./constants"
import { colors } from "./utils"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, set, ref, onDisconnect } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// start
(function() {

    let playerId : any;
    let playerRef : any; // reference to database

    onAuthStateChanged(auth, (user) => {
        console.log(user)
        // check if user exists and signed in anonymously 
        if (user.isAnonymous && user) {
            
            console.log("Logged in")

            playerId = user.uid;
            // create reference to database
            playerRef = ref(database, `players/${playerId}`)

            // init player data
            set(playerRef, {
                hand: [],
                name: "Popoefish",
                isTurn: false   
            })

            // remove player data from db when disconnect
            onDisconnect(playerRef).remove()

        } else {

            console.log("Logged out")
        }
    })


    signInAnonymously(auth).then(() => {
    // stuff when signed in


    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage);
    })  
    

})();


















