
const quotes = []

export const getQuotes = () => {
  // .map is an array method - quote is one object in the quotes array
  const copyOfQuotes = quotes.map(quote => ({...quote}))
  return copyOfQuotes
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
export const addNewQuote = (newQuote) => {
  const newId = getNewQuoteId()
  newQuote.id = newId
  quotes.push(newQuote)

  document.dispatchEvent(new CustomEvent("stateChanged"))
}