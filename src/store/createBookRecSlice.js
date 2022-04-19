let booksToDisplay = [];
let fetchedBooks = [];

// function for google books api fetch
function fetchBooks(searchTerm) {
    // currently grabs a lot of academic books, want to get rid of those eventually I think
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        // retrieves random 3 books from response and calls displayBook to output to viewport
        for (i = 0; i < 3; i++) {
          let a = Math.floor(Math.random() * 10);
          let book = result.items[a].volumeInfo;
  
          // to check for duplicates
          if (booksToDisplay.includes(book)) {
            i--
          }
          else {
            booksToDisplay.push(book);
            displayBook(book, i);
          };
        };
      }).catch(function (error) {
        // logs error if a problem occurs
        console.log(error);
      });
  };

  const createBookRecSlice = (set, get) => ({
    eatFish: () => {
      set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
    }
  });
  
  export default createBookRecSlice;