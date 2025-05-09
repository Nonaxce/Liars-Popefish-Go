// ENGINE

// import kaplay
import kaplay from "kaplay";

// export kaplay as a context
export const k = kaplay({
    global: false,
    width: 640,                                 
    height: 320,
    scale: 3,
    letterbox: false,
    font: "tiny5",
    pixelDensity: 1,
    debug: true, // change this 
    debugKey: "f1", 
    crisp: true,
    canvas: document.querySelector("#gameContainer"),
    background: [255, 255, 255],
    texFilter: "nearest",
    logMax: 8,
    logTime: 6,
    hashGridSize: 32,  // 64 too overkill
    touchToMouse: true,
    loadingScreen: true,
    backgroundAudio: false,
    maxFPS: 60,
    focus: true,
});