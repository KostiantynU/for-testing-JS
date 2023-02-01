function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  let temporary = 0;
  for (let i = min; i < max; i += 1) {
    temporary += numbers[i]; // Here i need to use method, that will add my number after zero index ;-)
    console.log(numbers);
  }
  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
