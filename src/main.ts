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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, set, ref, onDisconnect } from "firebase/database";

const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


/**
 * @todo - move to new file "helpers.ts"
 */
// helpers

// three characters version of console.log()
const log = (s: any): void => console.log(s);

// get the file size in bytes of a string
const byteSize = (str: string) : number => new Blob([str]).size

// convert string encoded deck to array for client use
function deckStringToArray(str: string) : string[] | void {
    // is it even? an string of 2 char substrings is always even
    if (str.length % 2 != 0) return log("invalid deck");

    // mince the string into an array of 2 characters
    let result : string[] = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i+2))
    }
    return result;
}

// convert array encoded deck to string for db use
function deckArrayToString(arr: string[]): string | void {
    // is it even? an array of 2 char items is always even
    if (arr.length % 2 != 0) return log("invalid deck");

    // 
    let result : string = "";
    for(const substr of arr) {
        result += substr;
    }
    return result;
}

const suits : string[] = ["C", "S", "H", "D"];
const ranks : string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// kay built different (joker red and black) 💪💪💪
const jokers : string[] = ["JR", "JB"];


function initDeck() : string[] {
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



k.scene("menu", () => {

    k.add([k.pos(0, 0),k.sprite("tiled", {width: k.width(),height: k.height(),tiled: true})])

    k.add([k.pos(k.center()),k.text(k.getSceneName(), {font: "tiny5"})])
})

k.scene("game", () => {
    
    k.setBackground(k.BLACK)
    
    k.add([k.pos(0, 0),k.sprite("tiled", {width: k.width(),height: k.height(),tiled: true})])

    k.add([k.pos(k.center()),k.text(k.getSceneName(), {font: "tiny5"})])
    /*

    function createCard(x : number, y: number, card: object): any {
        return k.make([
            k.pos(x, y),
            k.sprite("clubs_king"),
            k.scale(1),
            k.area(),
            //k.rotate(k.rand(-2, 2)),
            k.anchor("center"),
            "card"
        ])
    }

    interface Player {

    }


    function createPlayer(): any {

    }


    // TODO: seperate into ui files or smth
    // turn this into "setHand()"
    const playerHand = k.add([
        k.pos(k.center().x, k.height()),
        k.rect(600, 400),
        k.opacity(0),
        k.anchor("center"),
        k.area()
    ])
    
    let newPos : number = 0;
    const cardPosY : number = playerHand.pos.y - 100
    for (let i = 0; i < 5; i++) {
       k.add(createCard(playerHand.pos.x + newPos - 100, cardPosY, {}))
       newPos += 60   

    }

    let draggedCard : any = null;
    k.onHover("card", (card) => {
        
    })

    k.onHoverUpdate("card", (card) => {
        if (k.isMouseDown("left")) {
            draggedCard = card;   
        }
    })
    
    k.onHoverEnd("card", (card) => {
        draggedCard = null
    })

    */
    

})


k.go("menu");





















