import { getShows, getShowTypes } from "./database.js"

const shows = getShows()
const showTypes = getShowTypes()


const findShowType = (showObject, showTypesArray) => {
    for (const type of showTypesArray) {
        if (showObject.showTypeId === type.id) {
            return type
        }
    }

    return null
}

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
