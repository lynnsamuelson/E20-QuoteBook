import {getQuotes, getAuthors, addNewQuote} from './quotes.js'

// move to json-server
// const authors = [
//   {
//     id: 1,
//     firstName: "The Future Dr. Noh"
//   },
//   {
//     id: 2,
//     firstName: "Lynn"
//   },
//   {
//     id: 3,
//     firstName: "Trevor"
//   },
//   {
//     id: 4,
//     firstName: "Alexa"
//   }
// ]


export const displayQuotes = () => {
  const quotes = getQuotes()
  const authors = getAuthors()
  // loop through array to display quotes
  let html = ""
  for(let i = 0; i< quotes.length; i++) {
    //get authors from json-server
    const author = authors.find(author => author.id === quotes[i].authorId)
    html += `
    <div class="quote">
      <p>${quotes[i].quote}</p>
      <p>${author?.firstName}</p>
    </div>`
  }
  return html
  // document.getElementById('quoteBlocks').innerHTML = html
}

// displayQuotes()


// event listener for the submit button
document.addEventListener("click", (e) => {
  if(e.target.id == "submitNewQuote") {
    const authors = getAuthors()
    //get values from text box
    const quote = document.getElementById("quoteText").value
    const authorText = document.getElementById("quoteAuthor").value

    // This finds the author object that matches the input author text
    const authorObj = authors.find(({ firstName }) => firstName === authorText);
    
    // Finding if author is alive
    const alive = document.querySelector("input[name=alive]:checked")?.value;
    
    // shortest - ternary version
    const isAlive = alive === "true" ? true : false
    
    // create a newQuote object
    const newQuote = {
      date: "09/20/22",
      authorId: authorObj.id,
      quote: quote,
      hashTags: [],
      isAuthorAlive: isAlive 
    }
    addNewQuote(newQuote)
  }
})





// Make a json file
  // Move data to json file
  // Serve the json file

// fetch calls to our mock api (json-server)
  // fetchQuotes
  // POST a fetch for saving quote

// shift JS to use json data???

