import kaplay from "kaplay"


export const k = kaplay({
    width: 1280,
    height: 720,
    canvas: document.querySelector("#gameContainer"),
    background: [0, 0, 0],
    global: false,
})