import { k } from "../kaplay";

export function button(arg: any) {
    return {
        id: "button",
        require: ["pos", "area"],
        onClick() {
            arg();
        }
    }
}