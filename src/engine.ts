// ENGINE

// import kaplay
import kaplay from "kaplay";

// export kaplay as a context
export const k = kaplay({
    width: 640,
    height: 320,
    letterbox: true,
    canvas: document.querySelector("#gameContainer"),
    background: [0, 0, 0],
    global: false,
    crisp: true
});