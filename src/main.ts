import { config } from "./config";           // get firebase api config
import { k } from "./engine";                // get kaplayjs context
import "./loader";                           // load all assets on start
import { log, byteSize, deckStringToArray, deckArrayToString } from "./utils";                        
import { MAX_ROOM_CAPACITY } from "./constants";
import { addButton } from "./ui/buttons"; 

// Firebase sdk functions
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator, set, ref, onDisconnect } from "firebase/database";

// set config
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const emulatingBa : boolean = false;


// when emulating
if (location.hostname === "localhost" && emulatingBa) {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "127.0.0.1", 9000);
} 




(function() {

    onAuthStateChanged(auth, (user) => {
        if (user && user.isAnonymous) {
            log("signed in");

            const playerId : string = user.uid;
            const playerRef = ref(db, `players/${playerId}`);

            // set the default player data
            set(playerRef, {
                roomID: "",
                hand: [],
                name: Math.floor(Math.random() * 1000),
                isTurn: false,
                isInGame: false
            })

            // remove player reference on disconnect
            onDisconnect(playerRef).remove()
        } else {
            log("logged out");
        }
    })

})()

function joinGame() {
    signInAnonymously(auth).then(() => {
        log("signed in anonymously");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    })
}


k.scene("menu", () => {
    const joinGameBtn = addButton(k.center().x, k.center().y, "spades_ace")

    joinGameBtn.onClick(() => joinGame(), "left")
})


k.scene("game", () => {

})

k.go("menu")





