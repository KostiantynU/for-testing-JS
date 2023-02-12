const tempObj = {
  legs: 4,
};
const testObject = Object.create(tempObj);
testObject.name = 'dog';
console.log(testObject);
console.log(testObject.legs);
const tempArray = Object.keys(testObject);
console.log(tempArray);
