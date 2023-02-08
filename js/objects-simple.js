// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   location: {
//     city: 'Uman',
//     region: 'Cherkasy',
//     library: 'Central library',
//   },
//   displayLocation() {
//     console.log(this.location);
//   },
//   changeCity(city) {
//     this.location.city = city;
//     console.log('This is new city: ', this.location.city);
//     console.log('Here is return of function: ', this.location);
//   },
// };

// const objEntries = Object.entries(book);
// console.log(objEntries);

// // Now the method for summ of all values of Object
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// // Here we making an array of values of keys of Object :-)
// const values = Object.values(goods);
// console.log('Values: ', values);

// let total = 0;
// // Now will make a cycle for summ of all values
// for (const value of values) {
//   total += value;
// }
// console.log('Summ of all values: ', total);

// This is how will work with iterrable of vaules of Object
// const keysOfBook = Object.keys(book);

// for (const keys of keysOfBook) {
//   console.log('Get KEYS: ', keys);
//   console.log('Value of KEYS: ', book[keys]);
// }

// This is example of own, and not own, propertys of Object
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';
// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log('name' in dog);
// console.log('legs' in dog);
// console.log(dog.hasOwnProperty('legs'));
// console.log('Property legs', dog.hasOwnProperty('legs'));
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(dog[key]);
//   }
// }

// Does not work, because Object is not iterrable thing
// for (const key of book) {
//   console.log('Look in KEY by FOR OF', key);
// }

// // This is cycle for getting 'key' of Object 'book'. Also gets VALUE of KEY in Object 'book'
// for (const key in book) {
//   console.log('Here is only KEY', key);
//   console.log(`Here is VALUE of ${key}`, book[key]);
// }

// book.displayLocation();
// book.changeCity('Talne');
// console.log(book.genres[0]);
// const location = book.location;
// console.log('native location', location);
// console.log('Look at location: ', book.location.city);
// book.isPublic = false;
// console.log(book.isPublic);
// // const bookTitle = book.title;
// console.log(book.title); // 'The Last Kingdom'

// // const bookGenres = book.genres;
// console.log(book.genres[1]); // ['historical prose', 'adventurs']

// // const bookPrice = book.price;
// console.log(book.price); // undefined
