
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