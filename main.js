// console.log("I'm here as js")

// for loops 
// string interpolation
// if/else


// data types
// data Structures
// create a data structure of our quotes
  // What properties
// Iterate over the quotes
// Add a conditional
// Can we break this up?
   // Data Structure Relationship

// string, int, boolean, null undefined
// array, object
const quotes = [
  {
    id: 1,
    date: "08/02/2022",
    authorId: 4,
    quote: "Come eat lunch. The dogs are home and will eat you.",
    hashTags: ["AI", "Amazon", "Skynet"],
    isAuthorAlive: false
  },
  {
    id: 2,
    date: "08/01/2022",
    authorId: 3,
    quote: "Here's some practice js",
    hashTags: ["JavaScript", "Code Stars", "E20", "Banana"],
    isAuthorAlive: true
  },
  {
    id: 3,
    date: "07/27/2022",
    authorId: 1,
    quote: "We won't hold your hands!",
    hashTags: ["Blanched Almonds", "Important things", "REMEMBER", "mister", "Future Dr. Noh", "Zombie"],
    isAuthorAlive: true
  },
  {
    id: 5,
    date: "08/02/2022",
    authorId: 1,
    quote: "I can do it!",
    hashTags: ["Notion Queen", "Future Dr. Noh", "Zombie"],
    isAuthorAlive: true
  },
  {
    id: 4,
    date: "04/27/2022",
    authorId: 2,
    quote: "Ask for help, even if you break the companies website.",
    hashTags: ["Main Instructor", "Dr.", "Zen", "Chemistry", "Balloon Gas Transport", "Forest"],
    isAuthorAlive: true
  }
]

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
for(let i = 0; i<quotes.length; i++) {
  // console.log(quotes[i])
  if(quotes[i].id === 4){
  // console.log(quotes[i])
    // console.log(quotes[i].hashTags[0])
  }
}

for(const quoteObj of quotes) {
  if(quoteObj.hashTags.length < 4) {
    const arrayString = quoteObj.hashTags.toString()
    // console.log(arrayString)
    // console.log(`The hashtag: ${quoteObj.hashTags.toString()}`)
  } else {
    // console.log("more than 4 hashtags")
  }
  // console.log(`This is my quote ${quoteObj.quote}`)
}

for(const quoteObj of quotes) {
  if(quoteObj.author){ 
    // console.log(`${quoteObj.author} is alive`)
  } else {
    // console.log("They be dead.")
  }
}

for(const quoteObj of quotes) {
  if(quoteObj.author === "Sydney") {
    // console.log(quoteObj.quote)
  }
}

for(const quoteObj of quotes) {
  if(quoteObj.authorId === 1) {
    // console.log(`Sydney's Quote: ${quoteObj.quote}`)
  }
}

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
