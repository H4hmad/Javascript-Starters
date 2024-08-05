const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calctip = () => {
  for (let i = 0; i < bills.length; i++) {
    bills[i] > 50 && bills[i] < 300
      ? tips.push(bills[i] * 0.15)
      : tips.push(bills[i] * 0.2);

    totals.push(tips[i] + bills[i]);
  }

  console.log(`The tips are: \n ${tips}\n The totals are: \n${totals}`);
};

calctip();

calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return avg;
};

console.log(calcAverage(totals));
