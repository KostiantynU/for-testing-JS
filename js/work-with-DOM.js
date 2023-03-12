const superBtn = document.querySelector('.superBtn');

// superBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('ul');
//   console.log(navEl);
//   const navItemEl = document.querySelector('.site-nav__item');
//   console.log(navItemEl);
//   const navLinkEl = document.querySelectorAll('.site-nav__link');
//   console.log(navLinkEl);
// });

superBtn.addEventListener('click', () => {
  const imgEl = document.querySelector('.hero-image');
  console.log(imgEl);
  console.log(imgEl.src);
  imgEl.src = './images/01.png';
  //   imgEl.width = '100px';
  console.log(imgEl.width);
  console.log(imgEl.src);
  const parEl = document.querySelector('.hero-p');
  console.log('parEl', parEl);
  console.log(parEl.textContent);
  parEl.textContent = 'new TEXT!!!';
  console.log(parEl.textContent);
});

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0]);
console.log(actions[0].dataset);
