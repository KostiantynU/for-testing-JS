//  * Працюємо з колекцією товарів у кошику:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  */
const basket = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
    console.log(this.items);
  },
  remove(productName) {
    for (const names of this.items) {
      let indexOfNames = this.items.indexOf(names);
      if (names.name === productName) {
        this.items.splice(indexOfNames, 1);
      }
    }
    console.log(this.items);
  },
  clear() {
    this.items = [];
    return this.items;
  },
  countTotalPrice() {
    let totalPrice = 0;
    for (const numbers of this.items) {
      console.log('price:', numbers.price);
      totalPrice += numbers.price;
      console.log(totalPrice);
    }
  },
};
const fruits = [
  { name: '🍎', price: 50 },
  { name: '🍇', price: 70 },
  { name: '🍋', price: 60 },
  { name: '🍓', price: 110 },
];
console.log(basket.getItems());
basket.add(fruits[0]);
basket.add(fruits[1]);
basket.add(fruits[2]);
basket.add(fruits[3]);
console.log(basket.items);
// console.log(basket.remove('🍎'));
// console.log(basket.clear());
console.log(basket.countTotalPrice());
