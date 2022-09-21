import {fetchQuotes, fetchAuthors} from "./quotes.js"
import {displayQuotes} from "./quotesDOM.js"

const mainContainer = document.getElementById('quoteBlocks')

const render = async () => {
  await fetchQuotes()
  await fetchAuthors()
  mainContainer.innerHTML = displayQuotes()
}

render()

document.addEventListener("stateChanged", (e) => {
  render()
})