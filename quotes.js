const api = "http://localhost:8080"

const applicationState = {
  quotes: [],
  authors: []
}

export const fetchQuotes = async () => {
  const quotes = await fetch(`${api}/quotes`)
  const quotesJS = await quotes.json()
  applicationState.quotes = quotesJS

}
export const fetchAuthors = async () => {
  const authors = await fetch(`${api}/authors`)
  const authorsJS = await authors.json()
  applicationState.authors = authorsJS
}

export const getQuotes = () => {
  // .map is an array method - quote is one object in the quotes array
  const copyOfQuotes = applicationState.quotes.map(quote => ({...quote}))
  return copyOfQuotes
}

export const getAuthors = () => {
  // .map is an array method - quote is one object in the quotes array
  const copyOfAuthors = applicationState.authors.map(author => ({...author}))
  return copyOfAuthors
}



export const getAuthorIds = () => {
  const authorIds = quotes.map(quote => {
    return quote.authorId
  })
  return authorIds
}

//Returns a new unique id for the quote
const getNewQuoteId = () => {
  let highestOrderId = 0
  if(quotes.length > 0){
    highestOrderId = quotes.sort((a, b) => b.id - a.id)[0].id
  }
  return highestOrderId + 1
}

 // use a function with array method push
export const addNewQuote = async (newQuote) => {
  // Need to save the quote to json-server
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newQuote)
  }
  const response = await fetch(`${api}/quotes`, fetchOptions)
  const responseJson = await response.json(response)

  document.dispatchEvent(new CustomEvent("stateChanged"))
}