import { get } from "http";
import { k } from "./engine"    // get kaplay context
import "./loader";              // load all assets on start

k.loadRoot("./");

const colors = {"Charcoal":"264653","Persiangreen":"2a9d8f","Saffron":"e9c46a","Sandybrown":"f4a261","Burntsienna":"e76f51"}

function getColor(obj : string | number) {
    return k.Color.fromHex(obj)
}


// TODO add ui
k.scene("menu", () => {
    k.setBackground(getColor(colors.Saffron))
    // empty for now
    const enterButton = k.add([
        k.pos(k.center()),
        k.rect(80, 60),
        k.area(),
        k.anchor("center")
    ])

    const text = enterButton.add([
        k.pos(9, 0),
        k.anchor("center"),
        k.color(k.BLACK),
        k.text("START", {
            size: 22,
            width: enterButton.width, 
            font: "tiny5", 
        })
    ])

    enterButton.onClick(() => {
        k.go("game")
    })
})


k.scene("game", () => {     
    const title = k.add([
        k.pos(k.center()),
        k.anchor("center"),
        k.color(k.BLACK),
        k.text("L I A R ' S P O P O E F  I  S    H GO", {
            size: 22,
            width: 100, 
            font: "tiny5", 
        })
    ])

    const backButton = k.add([
        k.pos(60, 50),
        k.rect(80, 60),
        k.area(),
        k.anchor("center")
    ])

    const text = backButton.add([
        k.pos(9, 0),
        k.anchor("center"),
        k.color(k.BLACK),
        k.text("BACK <-", {
            size: 22,
            width: backButton.width, // it'll wrap to next line when width exceeds this value
            font: "tiny5", 
        })
    ])

    backButton.onClick(() => {
        k.go("menu")
    })
})

k.onLoad(() => k.go("menu"))









