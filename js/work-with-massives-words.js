// ------------ This is NOT works for module 2 exaple 13, but works ins VSCode
// function slugify(title) {
//   // Change code below this line
//   title = title.toLowerCase();
//   //   console.log(title);
//   title = title.replaceAll(/ /g, '-');
//   //   console.log(title);
//   return title;
//   // Change code above this line
// }
// console.log('Arrays for begginers =', slugify('Arrays for begginers'));
// console.log('English for developer =', slugify('English for developer'));
// console.log('Ten secrets of JavaScript =', slugify('Ten secrets of JavaScript'));
// console.log(
//   'How to become a JUNIOR developer in TWO WEEKS =',
//   slugify('How to become a JUNIOR developer in TWO WEEKS')
// );

// -----------------------RegExp WTF-----------------
// function slugify(title) {
//     const slug = title.replace(/ /g, '-').toLowerCase();
//   return slug;
// }

// ---------------------------02:14--------------------------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//--------------------------------02:15----------------------
// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ['Mercury', 'Venus', 'Earth'];
// const secondArray = ['Mars', 'Jupiter'];
// const thirdArray = ['Saturn', 'Uranus', 'Neptune'];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

//------------------------------02:16---------------------------
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового
// масиву з усіма елементами двох вихідних firstArray і secondArray.Параметр maxLength
// містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути
// копію масиву довжиною maxLength елементів.В іншому випадку функція повинна повернути
// новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// 1. Concat two massives
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let twoArrays = firstArray.concat(secondArray);

//   // Here i check is this array correct?
//   //   console.table('What i get ', twoArrays);
//   //   console.log('Here is length = ', twoArrays.length);

//   // Now i need to find a solution

//   if (twoArrays.length > maxLength) {
//     twoArrays = twoArrays.slice(0, maxLength);
//     return twoArrays;
//   } else {
//     return twoArrays;
//   }

//   // Change code above this line
// }
// console.log('This is call makeArray -', makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(
//   'This is call makeArray -',
//   makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)
// );
// console.log(
//   'This is call makeArray -',
//   makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)
// );
// console.log(makeArray('This is call makeArray -', ['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(
//   'This is call makeArray with ZERO-',
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)
// );

// ----------------------------Repeta looking for login----------------------
// const logins = ['m4ngoDodge', 'kiwidab3st', '1poly1scute', 'a4jxth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Use ${loginToFind} not founded!`;

// for (let i = 0; i < logins.length; i += 1) {
//   let login = logins[i];
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//   if (login === loginToFind) {
//     message = `This ${loginToFind} is found`;
//     break;
//   }
// }
// console.log(message);

// ---------Declaration method ;-) --------------------
// const logins = ['m4ngoDodge', 'kiwidab3st', '1poly1scute', 'a4jxth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind)
//   ? `User ${loginToFind} founded!`
//   : `User ${loginToFind} not founded!`;
// console.log(message);

// -----------------------Repeta delete las symbol in string------
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// -----------imperialistic method-------
// for (const friend of friends) {
//   string += friend + ',';
// }
// console.log(string);
// string = string.slice(0, string.length - 1);

// -------------declration method---------
// const string = friends.join(', ');
// console.log(string);

// -------------Repeta changes lower/upper case in whole word
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);
//   //   if (letter === letter.toLowerCase()) {
//   //     console.log('This letter is in LowerCase! - ', letter);
//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     console.log('This letter is in UpperCase! - ', letter);
//   //     invertedString += letter.toLowerCase();
//   //   }

//   //--------- Smallest writing code ---------
//   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// ----------F**king SLUG---------
// const title = 'Top 10 benefits of React Framework';
// // Here making text in lowerCase.
// const normalizedTitle = title.toLowerCase();
// // Here making a massive from string Title, and split it
// // by ' '
// const words = normalizedTitle.split(' ');
// // Here delete space and paste '-'
// const slug = words.join('-');
// console.log('Here SLUG by 3 variables: ', slug);
// // Here slug by ONE row of code:
// const slug2 = title.toLowerCase().split(' ').join('-');
// console.log('Here SLUG by one row of code: ', slug2);
