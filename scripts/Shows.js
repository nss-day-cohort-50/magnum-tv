import { getShows} from "./database.js"

const shows = getShows()

export const Shows = () => {
    let html = "<ul>"

    for (const show of shows) {
        html += `<li id="show--${show.id}">${show.name}</li>`
    }

    html += "</ul>"

    return html
}
