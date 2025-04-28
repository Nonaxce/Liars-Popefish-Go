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
    font: "monospace",
    pixelDensity: 1,
    crisp: true,
    canvas: document.querySelector("#gameContainer"),
    background: [255, 255, 255],
    texFilter: "nearest",
    logMax: 8,
    logTime: 6,
    hashGridSize: 32,
    touchToMouse: true,
    loadingScreen: true,
    backgroundAudio: false,
    maxFPS: 60,
    focus: true,
});