import { k } from "../kaplay";
import { button } from "../comps/button";
import "./game";

k.scene("menu", () => {
    const playButton = k.add([
        k.pos(k.center()),
        k.area(),
        k.rect(100, 160),
        k.color(k.BLUE),
    ])

    playButton.onClick(() => {
        k.go("game")
    })
})