// three characters version of console.log()
export const log = (s: any): void => console.log(s);

// get the file size in bytes of a string
export const byteSize = (str: string) : number => new Blob([str]).size

// convert string encoded deck to array for client use
export function deckStringToArray(str: string) : string[] | void {
    // is it even? an string of 2 char substrings is always even
    if (str.length % 2 != 0) return log("invalid deck");

    // mince the string into an array of 2 characters
    let result : string[] = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i+2))
    }
    return result;
}

// convert array encoded deck to string for db use
export function deckArrayToString(arr: string[]): string | void {
    // is it even? an array of 2 char items is always even
    if (arr.length % 2 != 0) return log("invalid deck");

    // 
    let result : string = "";
    for(const substr of arr) {
        result += substr;
    }
    return result;
}

export function initDeck() : string[] {
    const suits : string[] = ["C", "S", "H", "D"];
    const ranks : string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const jokers : string[] = ["JR", "JB"];

    // create standard deck
    const deck : string[] = [];
    for(const suit of suits) {
        for(const rank of ranks) {
            deck.push(`${suit}${rank}`)
        }
    }
    // add jokers
    for(const j of jokers) deck.push(j);
    return deck;
}
