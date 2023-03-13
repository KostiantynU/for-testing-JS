const superBtn = document.querySelector('.superBtn');

const myParagraph = document.querySelector('.hero-p');
// console.log(myParagraph.classList);
// console.log(myParagraph.classList.replace('hero-p', 'hero__p'));
// console.log(myParagraph.classList);
const newHone = document.createElement('h1');
console.log(newHone);
newHone.textContent = "I'm new H1!";
console.log(newHone);
superBtn.before(newHone);
const firstList = document.querySelector('.first-list');
console.log(firstList);
const secondList = firstList.childNodes;
console.log('pseudo+textContent:', secondList);
console.log('secondList[1].textContent:', secondList[1].textContent);
const thirdList = firstList.children;
console.log('just pseudo, without textContent:', thirdList);
const fourthList = firstList.firstChild;
console.log('firstChild+textContent, \\n:', fourthList);
const fiveList = firstList.firstElementChild;
console.log('firstElementChild:', fiveList);
const sixList = firstList.previousSibling;
console.log('previousSibling+textContent (\\n):', sixList);
const sevenList = firstList.previousElementSibling;
console.log('previousSibling ELEMENT:', sevenList);
const zeroList = firstList.parentNode;
console.log('parentNode:', zeroList);

superBtn.addEventListener('click', () => {
  const imgEl = document.querySelector('.hero-image');
  console.log(imgEl);
  console.log(imgEl.src);
  imgEl.src = './images/01.png';
  imgEl.width = 100;
  console.log(imgEl.width);
  console.log(imgEl.src);
  const parEl = document.querySelector('.hero-p');
  console.log('parEl', parEl);
  console.log(parEl.textContent);
  parEl.textContent = 'new TEXT!!!';
  console.log(parEl.textContent);
});

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[0]);
// console.log(actions[0].dataset);
