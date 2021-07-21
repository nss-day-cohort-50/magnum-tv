import { Actors } from "./Actors.js"
import { Shows } from "./Shows.js"
import { WatchList } from "./WatchList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Magnum TV</h1>
<article class="details">
    <section class="detail--column list details__actors">
        <h2>Actors</h2>
        ${Actors()}
    </section>
    <section class="detail--column list details__shows">
        <h2>Shows</h2>
        ${Shows()}
    </section>
</article>

<article class="details">
    <section class="watchlist">
        <h2>WatchList</h2>
        ${WatchList()}
     </section>
</article>
`

mainContainer.innerHTML = applicationHTML