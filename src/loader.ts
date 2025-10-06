import { k } from "./kaplay";

// how to generate "k.loadSprite("suit_rank", "filename.png")" 52 unique times when you are lazy >:]
const suits: string[] = ["clubs", "diamonds", "spades", "hearts"];
const ranks: string[] = ["A", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "K", "Q"];
// create every combination of card from the lists above
for(const suit of suits) {
    for(const rank of ranks) {
       k.loadSprite(`${suit}_${rank}`, `sprites/cards/card_${suit}_${rank}.png`)
    }
}
// other cards
k.loadSprite("card_back", "sprites/cards/card_empty.png");
k.loadSprite("joker_black", "sprites/cards/card_joker_black.png");
k.loadSprite("joker_red", "sprites/cards/card_joker_red.png");




