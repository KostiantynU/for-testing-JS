// Here will be massive and summ of all his elements.

// const carts = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < carts.length; i += 1) {
//   total += carts[i];
// }
// console.log(total);

// Тут вийшло витягнути з масиву кількість парних чисел :-)

// const numbers = [1, 3, 5, 7, 8, 9, 12, 15, 18, 32, 44, 63];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   const useFull = numbers[i];
//   if (useFull % 2 === 0) {
//     total += 1; // If we will say 'total += numbers[i] = will get the summ of even numbers!
//   } else if (useFull !== 0) {
//     continue;
//   }
// }
// console.log(total);

// Here i want to find ODD numbers
const numbers = [1, 3, 5, 7, 8, 9, 12, 15, 18, 32, 44, 63];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  const useFull = numbers[i];
  if (useFull % 2 !== 0) {
    total += 1; // If we will say 'total += numbers[i] = will get the summ of even numbers!
    console.log('This numbers is ODD', useFull);
  } else if (useFull !== 0) {
    continue;
  }
}
console.log(total);

// function calculateEngravingPrice(message, pricePerWord) {
//   let total = 1;
//   for (const lengthArr of message) {
//     total *= lengthArr;
//   }
//   return total;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
