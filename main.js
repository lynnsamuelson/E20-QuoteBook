import {getQuotes, addNewQuote} from './quotes.js'

const authors = [
  {
    id: 1,
    firstName: "The Future Dr. Noh"
  },
  {
    id: 2,
    firstName: "Lynn"
  },
  {
    id: 3,
    firstName: "Trevor"
  },
  {
    id: 4,
    firstName: "Alexa"
  }
]

// console.log(quotes)
// console.log(quotes[2])  
// console.log(quotes[i])  // This is gives an error because i is not defined yet  


/****** Start of Sat Notes *******/
const htmlString = '<h1>I am from JS</h1>'
document.getElementById('quotes').innerHTML = htmlString

const firstAuthor = authors[0].firstName
document.getElementById('quotes').innerHTML = `<h1>${firstAuthor}</h1>`

let htmlAuthors = '<ul>'
for(const author of authors) {
  console.log(author)
  htmlAuthors = `<li>${author.firstName}</li>`
}
htmlAuthors += '</ul>'

document.getElementById('authorsList').innerHTML = htmlAuthors


/******* Start Code from 8/16/22 *******/

const displayQuotes = () => {
  const quotes = getQuotes()
  // loop through array to display quotes
  let html = ""
  for(let i = 0; i< quotes.length; i++) {
    const author = authors.find(author => author.id === quotes[i].authorId)
    html += `
    <div class="quote">
      <p>${quotes[i].quote}</p>
      <p>${author.firstName}</p>
    </div>`
  }

  document.getElementById('quoteBlocks').innerHTML = html
}

displayQuotes()


// event listener for the submit button
document.addEventListener("click", (e) => {
  if(e.target.id == "submitNewQuote") {
    //get values from text box
    const quote = document.getElementById("quoteText").value
    const authorText = document.getElementById("quoteAuthor").value

    // This finds the author object that matches the input author text
    const authorObj = authors.find(({ firstName }) => firstName === authorText);
    
    // Finding if author is alive
    const alive = document.querySelector("input[name=alive]:checked")?.value;
    
    //Long version
    // let isAlive
    // if(alive === "true") {
      //   isAlive = true
      // } else {
        //   isAlive = false
        // }
        
    //med length version
    // let isAlive = false
    // if(alive === "true") {
    //   isAlive = true
    // }
    
    // shortest - ternary version
    const isAlive = alive === "true" ? true : false
    
    console.log(isAlive)

    
    // create a newQuote object
    const newQuote = {
      date: "08/30/22",
      authorId: authorObj.id,
      quote: quote,
      hashTags: [],
      isAuthorAlive: isAlive 
    }
    console.log("newQuote", newQuote)
    addNewQuote(newQuote)
  }

  // import and invoke a function from quotes.js

})

document.addEventListener("stateChanged", (e) => {
  displayQuotes()
})
  
// HTML ids that code connects to 
// StateChanged Event listener (custom)
// start with empty array and add a quote

// Steps to take
// event listener for the submit button
  //get values from text box
  // create a newQuote object
  // import and invoke a function from quotes.js

// Add newQuote to quotes array (export function)
  // use a function with array method push

// Display on DOM
  // dispatch custom event 
  // Add event listener for custom event 
    // displayQuotes()