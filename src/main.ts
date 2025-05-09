import { k } from "./engine";                // get kaplayjs context
import "./loader";                           // load all assets on start


import { addButton } from "./ui/buttons";   // import ui components



// temp
const cards: string[] = ["sa", "s1", "sk", "s0"];


// game
k.scene("#game", () => {
    const handArea = k.add([
        k.pos(k.center().x, k.center().y - 100),
    ])

    let posX: number = 0
    for(const card of cards) {
        handArea.add([
            
        ])
    }
    
})

// menu
k.scene("#menu", () => {

    //k.setBackground(k.BLACK);

    const playButton = addButton(k.center().x, k.center().y, "hearts_ace", "play");
    k.debug.log(playButton.height)
    playButton.onClick(() => {
        k.go("#game")
    }, "left");

    const a = k.add([
        k.pos(k.center()),
        k.sprite("spades_king"),
    ])   

    console.log(a.width)
});



document.addEventListener("DOMContentLoaded", () => {
    k.go("#menu")
})












