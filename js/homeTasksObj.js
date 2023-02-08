const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
console.log('this is array:', keys);
const apart = Object.keys(apartment);
console.log('here is apart:', apart);
for (const key of apart) {
  if (apartment.hasOwnProperty(key)) {
    console.log('look in key', key);
    // keys.push(key);
    values.push(apartment[key]);
  }
}
console.log('array values:', values);
console.log('must be array with key:', keys);
