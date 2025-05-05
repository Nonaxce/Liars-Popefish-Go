import { k } from "../engine"





export function addButton(x: number, y: number, spr: string, txt?: string) {

    const button = k.make([
        k.pos(x, y),
        k.sprite(spr), 
        k.area({
            collisionIgnore: ["button"]
        }),
    ])

    // early return if use does not provide text
    if (!txt) {
        return k.add(button)
    }

    button.add([
        k.text(txt),
        k.color("#000000"),
        k.anchor("center"),

    ])

    return k.add(button);
}



