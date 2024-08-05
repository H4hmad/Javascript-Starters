let tip;
const calcTip = (billValue) => {
  billValue > 50 && billValue < 300
    ? (tip = billValue * 0.15)
    : billValue * 0.2;
  return tip;
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);
