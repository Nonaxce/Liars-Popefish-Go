import { k } from "../engine"





export function addButton(x: number, y: number, spr: string, txt?: string) {

    const button = k.make([
        k.pos(x, y),
        k.sprite(spr, {}), 
        k.area({
            collisionIgnore: ["button"]
        }),
    ])

    // early return if use does not provide text
    if (!txt) {
        return k.add(button)
    }

    button.add([
        k.pos(button.width, button.height),
        k.text(txt, {
            size: 20,
            width: button.width
        }),
        k.color("#000000"),
        k.anchor("center"),
    ])

    console.log(button.width)
    return k.add(button);
}



