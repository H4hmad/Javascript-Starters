'use strict';
// Starting off with Strings.

console.log(`a+very+nice+string`.split('+'));

console.log(`Hamad Ahmad`.split(' '));

const [firstName, lastName] = `Hamad Ahmad`.split(' ');
console.log(firstName);
console.log(lastName);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitilizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
// console.log();
capitilizeName(`jessica ann smith davis`);
capitilizeName('hamad ahmad');

const message = 'Go to gate 23!';

console.log(message.padStart(25, '+').padEnd(35, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1234123412341234));
console.log(maskCreditCard('4321432143214321'));

const messagex = 'Bad weather... All Departures Delayed...';

console.log(messagex.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(23);
planesInLine(12);
