function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [...numbers];

  newArray.forEach(element => {
    if (element % 2 === 0) {
      let number = element + value;
      let indexFor = newArray.indexOf(element);
      newArray.splice(indexFor, 1, number);
    }
  });
  return newArray;
  // Change code above this line
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
