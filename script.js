'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///
///
///

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //Creating and Inserting Elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cokkies for improved functionality and analytics';
// message.innerHTML =
//   'We use cokkies for improved functionality and analytics <button class = "btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);

// // header.before(message);
// // header.after(message);

// //Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// //STYLES
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // console.log(message.style.color);

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);

// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

// //Data Attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll (X/Y): `, window.scrollX, scrollY);

  console.log(
    'Height/width viewport: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  window.scrollTo(s1coords.left + window.scrollX, s1coords.top + scrollY);
});
