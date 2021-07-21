import { getActors } from "./database.js"

const actors = getActors()

export const Actors = () => {
    let html = "<ul>"

    for (const actor of actors) {
        html += `<li id="actor--${actor.id}">${actor.name}</li>`
    }

    html += "</ul>"

    return html
}
