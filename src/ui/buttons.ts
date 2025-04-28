import { k } from "../engine"

export function addButton(x: number, y: number, spr: string) {
    return k.add([
        k.pos(x, y),
        k.sprite(spr), 
        k.area(),
    ])
}



