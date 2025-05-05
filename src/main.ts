import { k } from "./engine";                // get kaplayjs context
import "./loader";                           // load all assets on start


import { addButton } from "./ui/buttons";


// game
k.scene("#game", () => {
    
})

// menu
k.scene("#menu", () => {
    const playButton = addButton(k.center().x, k.center().y, "hearts_ace", "hello");
});




k.go("#menu")











