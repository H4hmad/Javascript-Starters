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

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// const greetHey = greet(`Hey`);
// greetHey(`Hamad`);
// greetHey('Yo');

// greet(`Hello`)(`Jonas`);

const emirates = {
  airline: 'Emirates',
  iataCode: `EK`,
  bookings: [],

  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

emirates.book(218, `Hamad Ahmad`);
emirates.book(223, `Jonas Schmedtmann`);
console.log(emirates);

const etihad = {
  name: `Etihad`,
  iataCode: `EY`,
  bookings: [],
};

const book = emirates.book;

book.call(etihad, 233, 'John Johnes');
console.log(etihad);

book.call(emirates, 253, 'Mary Cooper');
console.log(emirates);

const swiss = {
  airline: `Swiss Airlines`,
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 332, `Barry Allens`);
console.log(swiss);

const flightData = [588, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

console.log(swiss);

//Bind Method
const bookEtihad = book.bind(etihad);
const bookEmirates = book.bind(emirates);
const bookSwiss = book.bind(swiss);

bookEtihad(298, `Steven Williams`);

console.log(etihad);

const bookEtihad23 = book.bind(etihad, 23);
bookEtihad23(`Hamad Ahmad`);
bookEtihad23(`James Johns`);

console.log(etihad);

//With Event Listeners
emirates.planes = 300;
emirates.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
const emiratesCaller = emirates.buyPlane.bind(emirates);

document.querySelector(`.buy`).addEventListener(`click`, emiratesCaller);

//Partial Application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

// addVAT = value => addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxv2 = rate => {
  return function (value) {
    return value + value * rate;
  };
};

const addVATv2 = addTaxRate(0.23);
console.log(addVATv2(100));
