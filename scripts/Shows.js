import { getShows, getShowTypes } from "./database.js"
import { findShowType } from "./utils.js"

const shows = getShows()
const showTypes = getShowTypes()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("show")) {
            const [, showId ] = event.target.id.split("--") // "1"

            for (const show of shows) {
                if (show.id === parseInt(showId)) {
                    const result = findShowType(show, showTypes)
                    if (result !== null) {
                        window.alert(`This show is of type ${result.type}`)
                    }
                }
            }
        }
    }
)



export const Shows = () => {
    let html = "<ul>"

    for (const show of shows) {
        html += `<li id="show--${show.id}">${show.name}</li>`
    }

    html += "</ul>"

    return html
}
