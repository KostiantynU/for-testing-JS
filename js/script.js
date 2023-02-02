function getCommonElements(array1, array2) {
  // Change code below this line
  let totalArr = [];
  for (const number of array1) {
    // console.group('Before if: ', number);
    // console.log('Before if totalArr: ', totalArr);
    if (array1.includes(number) && array2.includes(number)) {
      totalArr.push(number);
      console.log('In if totalArr: ', totalArr);
    }

    // } else {
    //   for (const numberr of array2) {
    //     console.group('Before if array2: ', numberr);
    //     console.log('Before if array2 totalArr: ', totalArr);
    //     if (array1.includes(numberr) && array2.includes(numberr)) {
    //       totalArr.push(numberr);
    //       console.log('In if  array2 totalArr: ', totalArr);
    //     }
    //   }
    // }
  }
  return totalArr;
  // if (array1.includes(i)  array2.includes(i)) {
  //   myArray1 = array1[i];
  //   console.log('Look in number: ', array1[i]);
  //   console.log('My myArr1: ', myArray1);
  // }

  // for (let i = 0; i < array2.length; i += 1) {
  //   console.log(array2.includes(2));
  //   console.log('Number of iteration: ', i);
  //   if (array2.includes(2) === array1.includes(3)) {
  //     myArray2 = array2[i];
  //     console.log('Look in number: ', array2[i]);
  //     console.log('My myArr2: ', myArray2);
  //   }
  // }
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
