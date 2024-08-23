'use strict';
// Starting off with Strings.

const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airplane.length);
console.log('B737'.length);

console.log(airplane.indexOf('r'));
console.log(airplane.lastIndexOf('r'));

console.log(airplane.indexOf('portugal'));

console.log(airplane.slice(4, 7));

console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log(`You've got the middle seat. Sed🥲`);
  } else {
    console.log(`Ahh! You got lucky this time.`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const email = 'hello@hamad.io';
const loginEmail = '  Hello@Hamad.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!. NOW!';

console.log(announcement.replaceAll('door', 'gate'));

const planex = 'Airbus  A320neo';

console.log(planex.includes('A320'));
console.log(planex.includes('Boeing'));
console.log(planex.includes('Air'));

if (planex.startsWith('Airbus') && planex.endsWith('neo')) {
  console.log('Part of the new Airbus family.');
} else {
  console.log(`Not part of the new airbus family. `);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are definitely not allowed on board.`);
  } else {
    console.log(`You are welcome on board.`);
  }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
