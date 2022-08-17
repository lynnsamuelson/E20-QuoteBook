import {getQuotes} from './quotes.js'

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

const newFuntion = () => {
  const quotes = getQuotes()
}

// for(const quote of quotes) {
//   //quote === quotes[i] above
// }