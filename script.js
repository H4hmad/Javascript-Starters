const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
let tip1;
let tip2;
let tip3;
bill1 > 50 && bill1 < 300 ? (tip1 = bill1 * 0.15) : (tip1 = bill1 * 0.2);

console.log(
  `The bill was ${bill1}, the tip was ${tip1}, and th total value was ${
    tip1 + bill1
  }`
);

bill2 > 50 && bill2 < 300 ? (tip2 = bill2 * 0.15) : (tip2 = bill2 * 0.2);

console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and th total value was ${
    tip2 + bill2
  }`
);

bill2 > 50 && bill2 < 300 ? (tip2 = bill2 * 0.15) : (tip2 = bill2 * 0.2);

console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and th total value was ${
    tip2 + bill2
  }`
);
