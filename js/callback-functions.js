// ---------- 04:04
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, callbackSuccess, callbeckUnsuccess) {
//     console.log(this.pizzas.includes(pizzaName));
//     if (this.pizzas.includes(pizzaName)) {
//       return callbackSuccess(pizzaName);
//     }
//     return callbeckUnsuccess(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// ---------- 04:13 Do not change the array numbers, return new array, where even numbers will add
// value
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [...numbers];

//   newArray.forEach(element => {
//     if (element % 2 === 0) {
//       console.log('element:', element);
//       let number = element + value;
//       console.log('number:', number);
//       let indexFor = newArray.indexOf(element);
//       console.log('indexFor', indexFor);
//       newArray.splice(indexFor, 1, number);
//     }
//   });
//   console.log('numbers', numbers);
//   console.log('newArray', newArray);
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
