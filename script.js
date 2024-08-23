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
