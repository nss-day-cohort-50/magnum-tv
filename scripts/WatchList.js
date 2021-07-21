import { getShows, getWatchlist, getActors } from "./database.js"

// Get copy of state for use in this module
const shows = getShows()
const actors = getActors()
const watchList = getWatchlist()


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
    let watchedListActor = ""

    for (const actor of actorsArray) {
        if (actor.showId === watchedActor.showId) {
            watchedListActor = actor
        }
    }

    return watchedListActor
}

export const WatchList = () => {
    let html = ""
    html = "<ul>"

    for (const watched in watchList) {
        const actor = findActor(watched, actors)
        const show = findShow(watched, shows)

        html += `<li>${show.name} starring ${actor.name} was watched on ${new Date(watchList.date).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}