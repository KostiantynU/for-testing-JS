// const books = [
//   {
//     title: 'The last kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.51,
//   },
// ];

// for (const book of books) {
//   console.log('Book: ', book);
//   console.log('Title: ', book.title);
//   console.log('Author: ', book.author);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }
// console.log(bookNames);

// let totalRating = 0;

// for (const ratin of books) {
//   totalRating += ratin.rating;
//   console.log('Look at the summ:', totalRating);
// }

// const avarageRating = (totalRating / books.length).toFixed(1);
// console.log('Look the avarage:', avarageRating);
// console.log('length: ', books.length - 1);

// --------- Task with joke - count the array without FOR OF ;-)
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const arrayKeys = Object.keys(object);
//   propCount = arrayKeys.length;
//   // console.log('arrayKeys', arrayKeys);
//   // const destrArray = [...arrayKeys];
//   // console.log('destrArray', destrArray);
//   // for (const key in object) {

//   // }

//   return propCount;
//   // Change code above this line
// }
// const big = { name: 'Big', age: 45 };
// const bigger = Object.create(big);
// bigger.year = 1985;
// console.log(bigger);
// console.log('bigger in countProps', countProps({ bigger }));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// arrayKeys.hasOwnProperty(key) ? (propCount += 1) : console.log('Not his values');

// ---------- 03:17 Count objects from array, get values of object in another arrays
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log('Here looking in HEX: ', hexColors);
// console.log('Here is rgbColors: ', rgbColors);
