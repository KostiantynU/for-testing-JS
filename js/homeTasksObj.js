// ---------- constructor like a procedure programming
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User('Mango', 'mango@gmail.com');
// console.log(mango);
// const poly = new User('Poly', 'poly@yahoo.com');
// console.log(poly);

// ---------- constructor like a Object oriented programming
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@gmail.com',
});
console.log(mango);
const poly = new User({ name: 'Poly', email: 'poly@yahoo.eu' });
console.log(poly);
