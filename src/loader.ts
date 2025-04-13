import { height } from "kaplay/dist/declaration/gfx";
import { k } from "./engine";

// sprites

const CARD_WIDTH : number = 50;
const CARD_HEIGHT : number = 64;


const suits : string[] = ["spades", "clubs", "hearts", "diamonds"];
const ranks : string[] = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

function createCardAtlasConfig(suits: string[], ranks: string[]) : any {
    let xCounter : number = 1;
    let yCounter : number = 1;
    let padding : number = 1;

    let configObj : any = {};

    for(const suit of suits) {
        for (const rank of ranks) {
            // create an object with the property name "suit_rank"
            configObj[`${suit}_${rank}`] = {
                x: xCounter,
                y: yCounter,
                width: CARD_WIDTH,
                height: CARD_HEIGHT
            }
            xCounter += CARD_WIDTH  + padding;
        }
        xCounter = 1
        yCounter += CARD_HEIGHT + padding;
    }

    return configObj;
}

const cardAtlasConfig = createCardAtlasConfig(suits, ranks);
console.log(cardAtlasConfig)
// cards
k.loadSpriteAtlas("sprites/cards_spritesheet.png", cardAtlasConfig)

// background
k.loadSprite("tiled", "sprites/tile.png")

// fonts
k.loadFont("tiny5", "fonts/tiny5-regular.woff2")
