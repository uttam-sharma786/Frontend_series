const library = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction"
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure"
    }
  ];

 

library.forEach(book =>{
    console.table(`${book.author} by ${book.title} ${book.genre}`)
})

library.map(key =>{
    console.log(`${key.author} by ${key.title} ${key.genre}`)

})