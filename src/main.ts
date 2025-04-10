import { config } from "./_firebase/config";    // get firebase api config
import { k } from "./engine"                    // get kaplayjs context
import "./loader";                              // load all assets on start


// later
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, set, ref, onDisconnect } from "firebase/database";
import { setBackground } from "kaplay/dist/declaration/gfx";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// start
(function() {

    let playerId : any;
    let playerRef : any; // reference to database
    let roomsRef : any 
    let roomRef : any

   

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


            // create a lobby
            //roomsRef = ref(database, `rooms`)

            // remove player data from db when disconnect
            onDisconnect(playerRef).remove()
            //onDisconnect(roomRef).remove()

        } else {

            console.log("Logged out")
        }
    })


    signInAnonymously(auth).then(() => {
    // stuff when signed in
        k.go("game")
        
        roomsRef = ref(database, `rooms`)

        roomsRef.push({
            hi: "a"
        })

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage);
    })  
    

})();


k.scene("game", () => {
    k.setBackground(0, 0, 200)

    k.debug.log(k.isTouchscreen())
})
    */

k.scene("menu", () => {

})

k.scene("game", () => {
    
    k.setBackground(k.Color.fromHex("D98324"))
    


    function createCard(x : number, y: number, card: object): any {
        return k.make([
            k.pos(x, y),
            k.sprite("clubs_A"),
            k.scale(5),
            k.area(),
            k.anchor("center"),
            "card"
        ])
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


    for (let i = 0; i < 5; i++) {
       k.add(createCard(playerHand.pos.x + newPos - 200, playerHand.pos.y - 100, {}))
       newPos += 110    

    }

    

    k.onClick("card", (card) => {
        if (card.sprite == "back") {
            card.use(k.sprite("clubs_A"))
        } else {
            card.use(k.sprite("back"))
        }
        
    })


    k.onHover("card", (card) => {
        card.pos.y -= 40   
    })

    k.onHoverEnd("card", (card) => {
        card.pos.y += 40
    })

})


k.go("game")





















