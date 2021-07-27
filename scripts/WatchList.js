import { getShows, getWatchlist, getActors, getShowTypes } from "./database.js"
import { findShowType } from "./utils.js"

// Get copy of state for use in this module
const shows = getShows()
const actors = getActors()
const watchList = getWatchlist()
const showTypes = getShowTypes()


// Function whose responsibility is to find the product for an order
const findShow = (watchedShow, showsArray) => {
    let watchListShow = null

    for (const show of showsArray) {
        if (show.id === watchedShow.showId) {
            watchListShow = show
        }
    }

    return watchListShow
}

// Function whose responsibility is to find the employee for an order
const findActor = (watchedActor, actorsArray) => {
    let watchedListActor = null

    for (const actor of actorsArray) {
        if (actor.id === watchedActor.showId) {
            watchedListActor = actor
        }
    }

    return watchedListActor
}

export const WatchList = () => {
    let html = ""
    html = "<ul>"

    for (const watched of watchList) {
        const actor = findActor(watched, actors)
        const show = findShow(watched, shows)
        const showType = findShowType(show, showTypes)

        html += `
            <li>${show.name} (${showType.type}) starring ${actor.name} was watched
            on ${watched.date}</li>
        `
    }

    html += "</ul>"

    return html
}