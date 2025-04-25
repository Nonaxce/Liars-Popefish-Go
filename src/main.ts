/****************************************************
 * LIARS POPEFISH GO
 * @readonly
 * 
 * 
 * HI might use supabase 
 ***************************************************/


import { config } from "./config";           // get firebase api config
import { k } from "./engine"                 // get kaplayjs context
import "./loader";                           // load all assets on start
import { log, byteSize, deckStringToArray, deckArrayToString } from "./utils"                        

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








function initDeck() : string[] {
    const suits : string[] = ["C", "S", "H", "D"];
    const ranks : string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const jokers : string[] = ["JR", "JB"];

    const deck : string[] = [];
    for(const suit of suits) {
        for(const rank of ranks) {
            deck.push(`${suit}${rank}`)
        }
    }
    for(const j of jokers) deck.push(j);
    return deck;
}



// start
(function() {

    let playerId : any;
    let playerRef : any; // reference to database
    let roomsRef : any ;
    let roomRef : any;

     
    onAuthStateChanged(auth, (user) => {
        log(user)
        // check if user exists and signed in anonymously 
        if (user.isAnonymous && user) {
            
            log("Logged in")

            playerId = user.uid;
            // create reference to database
            playerRef = ref(database, `players/${playerId}`)
            
            // init player data
            set(playerRef, {
                // TODO convert to string
                hand: ["a", "b", "c"],
                name: "Popoefish",
                isTurn: false   
            })


            // create a lobby
            //roomsRef = ref(database, `rooms`)

            // remove player data from db when disconnect
            onDisconnect(playerRef).remove()

        } else {
            log("Logged out")
        }
    })


    signInAnonymously(auth).then(() => {
    // stuff when signed in
        k.go("menu")
        
        // idk
        roomsRef = ref(database, `rooms`)


    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage);
    })  
    

})();

























