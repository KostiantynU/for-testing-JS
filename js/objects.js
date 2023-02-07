const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book.isPublic = false;
console.log(book.isPublic);
// const bookTitle = book.title;
console.log(book.title); // 'The Last Kingdom'

// const bookGenres = book.genres;
console.log(book.genres[1]); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
console.log(book.price); // undefined
