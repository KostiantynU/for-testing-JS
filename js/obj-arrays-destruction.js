// ---------- 03:26 This is example of destruction two objects
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })
// );
// console.log(
//   calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })
// );

// ---------- 03:35 Work with SPLICE - delete name of book, and add at his place new name, rename if
// talking simple
//
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log('Original books: ', this.books);
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     console.log('Changed books: ', this.books);
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

// --------- 03:41 Very interesting task, like a task from Repeta with basket of goods:
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const nam of this.potions) {
//       if (nam.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const nam of this.potions) {
//       const potionIndex = this.potions.indexOf(nam);
//       if (nam.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const names of this.potions) {
//       if (names.name === oldName) {
//         names.name = newName;
//       }
//     }
//     return this.potions;
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// // console.log(atTheOldToad.removePotion('Dragon breath'));
// // console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));


