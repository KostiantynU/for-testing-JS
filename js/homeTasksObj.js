const numbers = [5, 10, 15, 20];

numbers.forEach(
  function (number) {
    console.log(this.a);
  },
  { a: 'I am Groot' }
);
