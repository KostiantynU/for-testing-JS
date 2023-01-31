// ---------- Interesting task - to find biggest word by length?
function findLongestWord(string) {
  // Change code below this line
  let letters = string.split(' ');
  console.log('Look at massive: ', letters);
  let leng = 0;
  let biggest = letters[0].length;
  for (let i = 0; i < letters.length; i += 1) {
    leng = [letters[i].length];
    console.log('Length of item: ', letters[i], ' ', leng);
    if (biggest > leng) {
      biggest = leng;
      console.log('This is it?: ', biggest);
    }
  }

  // Change code above this line
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);
