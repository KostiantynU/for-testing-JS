// // //  * Працюємо з колекцією товарів у кошику:
// // //  * - getItems()
// // //  * - add(product)
// // //  * - remove(productName)
// // //  * - clear()
// // //  * - countTotalPrice()
// // //  * - increaseQuantity(productName)
// // //  * - decreaseQuantity(productName)
// // //  *
// // //  */
// const basket = {
//   items: [],
//   //   secondShow: function () {
//   //     console.log(this);
//   //   },
//   getItems() {
//     // console.log('Try to use arrow function');
//     // const showThis = () => {
//     //   console.log('arrow F in method getItems');
//     //   console.log('Show THIS:', this);
//     return `Return of ${this.items}`;
//     // };
//     // showThis();
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         product.quantity += 1;
//         return `The name ${product.name} is exist, increase quantity only`;
//       }
//     }
//     product.quantity = 1;
//     this.items.push(product);
//     console.log('result of ADD: ', this.items);
//   },
//   remove(productName) {
//     for (const names of this.items) {
//       let indexOfNames = this.items.indexOf(names);
//       if (names.name === productName) {
//         this.items.splice(indexOfNames, 1);
//       }
//     }
//     console.log('The array after remove item', this.items);
//     return this.item;
//   },
//   clear() {
//     this.items = [];
//     return `Array after 'Clear': ${this.items}`;
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const numbers of this.items) {
//       totalPrice += numbers.price;
//     }
//     return `Total price is ${totalPrice}`;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         console.log('+=quantity:', item.quantity);
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         console.log('-=quantity:', item.quantity);
//       }
//     }
//   },
// };
// const fruits = [
//   { name: '🍎', price: 50 },
//   { name: '🍇', price: 70 },
//   { name: '🍋', price: 60 },
//   { name: '🍓', price: 110 },
// ];
// console.log(basket.getItems());
// // console.log('secondShow', basket.secondShow());
// basket.add(fruits[0]);
// basket.add(fruits[1]);
// basket.add(fruits[2]);
// basket.add(fruits[3]);
// basket.add(fruits[3]);
// basket.add(fruits[2]);
// console.log('Basket after add 5 times:', basket.items);
// // console.log(basket.remove('🍓'));
// // console.log(basket.clear());
// console.log(basket.countTotalPrice());
// // console.log(basket.increaseQuantity('🍇'));
// // console.log(basket.increaseQuantity('🍇'));
// // console.log(basket.decreaseQuantity('🍇'));
