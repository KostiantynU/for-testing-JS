//-------------------- Here will be massive and summ of all his elements.

// const carts = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < carts.length; i += 1) {
//   total += carts[i];
// }
// console.log(total);

//-------------- Тут вийшло витягнути з масиву кількість парних чисел :-)

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

// -----------------------------Here i want to find ODD numbers
// const numbers = [1, 3, 5, 7, 8, 9, 12, 15, 18, 32, 44, 63];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   const useFull = numbers[i];
//   if (useFull % 2 !== 0) {
//     total += 1; // If we will say 'total += numbers[i] = will get the summ of even numbers!
//     console.log('This numbers is ODD', useFull);
//   } else if (useFull !== 0) {
//     continue;
//   }
// }
// console.log(total);

//-------------------------------------Examples----------------
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
//------------------------------------------------------------------------

//----------------------------------------------------------
// Here i am looking for message * pricePerWord = totalPrice for engraving.
// function calculateEngravingPrice(message, pricePerWord) {

// First - making "message" a correct massive, with length.
// message = message.split(' ');
// Look what we get.
//   console.log(message);
// Now will count price, with "for of" = does not work, because "variable of iterables"
// getting VALUE, but i need COUNT.
//   let totalPrice = 0;
//   for (let i = 0; i <= message.length; i += 1) totalPrice = pricePerWord * i;
//   console.log(totalPrice);
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// --------------------------- 02: 17----------------------------------
// Цикли використовуються для багаторазового повторення коду. Оголошення циклу for
//складається з трьох виразів.

// for (Ініціалізація; Умова; Пост - вираз) {
//   // Тіло циклу
// }
// Ініціалізація - виконується один раз перед початком циклу. Використовується для
// створення змінної - лічильника і встановлення її початкового значення.
// Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу.
// Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується
// , якщо значення буде false.
// Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови.
// Використовується для оновлення змінної - лічильника.
// Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо
// вираз умови приводиться до true.
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується
// (його тіло) доти, доки i <= 20, тобто умова приводиться до true.Після кожної ітерації
// лічильник збільшується на 5.

// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start
//  до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// -------------------- Шукаємо найменше число
// This is my think, and it is wrong. But works ;-)
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let tempNum = 0;
// let tempNumSecond = 0;
// let totalNum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   tempNum = numbers[i];
//   console.log('This is tempNum: ', tempNum);
//   tempNumSecond = numbers[i + 1];
//   console.log('This is tempNumSecond: ', tempNumSecond);
//   if (tempNum < tempNumSecond) {
//     totalNum = tempNum;
//   }
// }
// console.log('This is smallest number: ', totalNum);
// ------------------- Now correct method from Repeta
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('This is smallest number: ', smallestNumber);

// ---------- How to concat two massives and summ them all--------
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
  total = +number;
}
console.log(total);
