function includes(array, value) {
  // Change code below this line
  let checkIn;
  for (const varia of array) {
    console.log('Lets see what is varia: ', varia);
    if (varia === value) {
      checkIn = true;
      console.log('Look for true: ', checkIn);
      return checkIn;
    } else {
      console.log('Look for false before: ', checkIn);
      checkIn = false;
      console.log('Look for false after: ', checkIn);
    }
  }
  return checkIn;
  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
