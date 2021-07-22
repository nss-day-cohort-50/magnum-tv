const database = {
    shows: [{
        id: 1,
        name: "Magnum PI",
        runtime: 60,
        showTypeId: 1
    },
    {
        id: 2,
        name: "Quantum Leap",
        runtime: 60,
        showTypeId: 1
    },
    {
        id: 3,
        name: "Golden Girls",
        runtime: 30,
        showTypeId: 2
    },
    {
        id: 4,
        name: "Different Strokes",
        runtime: 30,
        showTypeId: 1
    },
    {
        id: 5,
        name: "Mork and Mindy",
        runtime: 30,
        showTypeId: 2
    },
    {
        id: 6,
        name: "Muppet Show",
        runtime: 60,
        showTypeId: 1
    },
    {
        id: 7,
        name: "Night Court",
        runtime: 30,
        showTypeId: 2
    },

    {
        id: 8,
        name: "The Jeffersons",
        runtime: 30,
        showTypeId: 2
    },
    {
        id: 9,
        name: "Cheers",
        runtime: 30,
        showTypeId: 2
    },
    {
        id: 10,
        name: "227",
        runtime: 30,
        showTypeId: 2
    }

    ],
    actors: [
        {
            id: 1,
            name: "Marla Gibbs",
            showId: 10
        },
        {
            id: 2,
            name: "Tom Selleck",
            showId: 3
        },
        {
            id: 3,
            name: "Ted Dansen",
            showId: 9
        },
        {
            id: 4,
            name: "John Laroquette",
            showId: 7
        },
        {
            id: 5,
            name: "Sherman Hemsley",
            showId: 8
        },
        {
            id: 6,
            name: "Gary Coleman",
            showId: 4
        },
        {
            id: 7,
            name: "Shelly Long",
            showId: 9
        },
        {
            id: 8,
            name: "Betty White",
            showId: 3
        },
        {
            id: 9,
            name: "Kermit The Frog",
            showId: 6
        },
        {
            id: 10,
            name: "Pam Dawber",
            showId: 10
        },
        {
            id: 11,
            name: "Scott Bakula",
            showId: 2
        }
    ],
    watchlist: [
        {
            id: 1,
            date: "2/02/81",
            showId: 2
        },
        {
            id: 2,
            date: "9/02/85",
            showId: 4
        },
        {
            id: 3,
            date: "2/02/87",
            showId: 3
        },
        {
            id: 4,
            date: "2/02/88",
            showId: 8
        }
    ],
    showTypes: [
        {
            id: 1,
            type: "drama",
        },
        {
            id: 2,
            type: "sit-com",
        },
    ]
}

export const getActors = () => {
    return database.actors.map(actor => ({ ...actor }))
}

export const getShows = () => {
    return database.shows.map(show => ({ ...show }))
}

export const getWatchlist = () => {
    return database.watchlist.map(watched => ({ ...watched }))
}
export const getShowTypes = () => {
    return database.showTypes.map(type => ({ ...type }))
}
