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

// ---------- 03:18 find a product.price by product.name
// I don't know why, but 'return' is not working - not show me in console.log product.price.
// But this taks is done successfull;

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   console.log('in fn', productName);
//   for (const product of products) {
//     console.log('in cycle', product.name);
//     if (product.name === productName) {
//       console.log(product.price);
//       return product.price;
//     }
//   }
//   return null;

//   // Change code above this line
// }
// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');
// getProductPrice('Engine');

// ---------- 03:19 Need to get values by name of KEY of object ---------
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   // console.log(propName);
//   for (const property of products) {
//     const tempArray = Object.keys(property);
//     // console.log('in FN', tempArray);
//     // console.log('true?', tempArray.includes(propName));
//     if (tempArray.includes(propName)) {
//       array.push(property[propName]);
//       // console.log('in IF', property[propName]);
//       // console.log('MyArray', array);
//     }
//     // else {
//     //   return array;
//     // }
//   }
//   return array;
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ----------03:21 At least multiply price * quantity, by destruction
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const { name, price, quantity } of products) {
//     if (name === productName) {
//       return (totalPrice = price * quantity);
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
