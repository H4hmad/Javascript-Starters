'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 2);

// createBooking('LH123', undefined, 2000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedmann',
//   passport: 1234432123,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 1234432123) {
//     alert(`Checked In`);
//   } else {
//     alert(`Wrong Passport!`);
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transfromer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transfromer(`Javascript is the best!`, upperFirstWord);
// transfromer(`Javascript is the best!`, oneWord);

// const high5 = function () {
//   console.log(`👋`);
// };

// document.body.addEventListener(`click`, high5);

// [`Jonas`, `Martha`, `Adam`].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greetHey = greet(`Hey`);
greetHey(`Hamad`);
greetHey('Yo');

greet(`Hello`)(`Jonas`);
