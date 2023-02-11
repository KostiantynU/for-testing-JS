const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  console.log('in fn', productName);
  for (const product of products) {
    console.log('in cycel', product.name);
    if (product.name === productName) {
      console.log('this is true');
    }
  }
  return null;
  // Change code above this line
}
getProductPrice('Radar');
getProductPrice('Grip');
getProductPrice('Scanner');
getProductPrice('Droid');
getProductPrice('Engine');
