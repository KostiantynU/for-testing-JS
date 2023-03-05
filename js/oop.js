// ---------- Example of procedure programming, and Object Oriented Programming
// const baseSalary = 3000;
// const overTime = 10;
// const rate = 20;
// const getWage = (baseSalary, overTime, rate) => {
//   return baseSalary + overTime * rate;
// };
// console.log(getWage(baseSalary, overTime, rate));

// const employee = {
//   baseSalary: 3000,
//   overTime: 10,
//   rate: 20,
//   getWageInObj() {
//     return this.baseSalary + this.overTime * this.rate;
//   },
// };
// console.log(employee.getWageInObj());

// ---------- Own properties in Object
// const animals = {
//   eats: true,
// };
// const dog = Object.create(animals);
// dog.name = 'mango';
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) console.log(key);
// }

// ---------- Bind only copy, not calling function, return function
// const person = { name: 'Mango' };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

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
// class User {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   static showTakenEmails() {
//     return this.#takenEmails;
//   }
//   #email;
//   #role;

//   constructor({ name, email, role }) {
//     this.name = name;
//     this.#email = email;
//     this.#role = role;
//     User.#takenEmails.push(email);
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     if (newRole === '') {
//       console.error('Role can not be null!!!');
//       return;
//     }
//     this.#role = newRole;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('E-mail can not be null!');
//       return;
//     }
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: 'Mango',
//   email: 'mango@gmail.com',
//   role: User.Roles.ADMIN,
// });
// console.log(mango);
// const poly = new User({ name: 'Poly', email: 'poly@yahoo.eu', role: User.Roles.EDITOR });
// console.log(poly);
// console.log(mango.email);
// mango.email = 'mango@yahoo.eu';
// mango.email = '';
// console.log(mango.email);
// console.log(User.isEmailTaken('mango@yahoo.eu'));
// console.log(User.showTakenEmails());

// --------- my Example of OOP
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts, numberOfPosts }) {
//     super(email);
//     this.posts = posts;
//     this.numberOfPosts = numberOfPosts;
//   }
//   get showPosts() {
//     return this.posts;
//   }
//   set changePosts(post) {
//     this.posts.push(post);
//     this.numberOfPosts += 1;
//   }
// }

// const editor = new ContentEditor({ email: 'mango@editor.com', posts: [], numberOfPosts: 0 });
// console.log(editor);
// console.log(editor.email);
// console.log(editor.showPosts);
// editor.changePosts = 'new01';
// console.log(editor.showPosts);
// console.log(editor.numberOfPosts);

// ---------- 05:10 Object with massive
// class Storage {
//   constructor(myArray) {
//     this.item = myArray;
//   }
//   getItems() {
//     return this.item;
//   }
//   addItem(newItem) {
//     this.item.push(newItem);
//   }
//   removeItem(remItem) {
//     const indxOfItem = this.item.indexOf(remItem);
//     this.item.splice(indxOfItem, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ---------- 05:11 OOP with String
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }

// ---------- another version of pad.both
//  padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }

// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// ----------- 05:17 check if Car.MAX_PRICE more, or not
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ---------- 05:19 example of "super" usage
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ---------- 05:20 work with black list of emails
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlcaklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
