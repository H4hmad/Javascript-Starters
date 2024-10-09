'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (mov) {
  const incomes = mov.filter(mov => mov > 0).reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = mov.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = mov
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Event Handler
let currentAccount;

btnLogin.addEventListener(`click`, e => {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.owner === inputLoginUsername.value);
  console.log(currentAccount);
});

//Short Challenge

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// const letters2 = [...arr, ...arr2];
// console.log(letters2);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement [${i + 1}] - You deposited: $${movement}`);
//   } else {
//     console.log(`Movement [${i + 1}] - You withdrew: $${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement [${index + 1}] - You deposited: $${movement}`);
//   } else {
//     console.log(
//       `Movement [${index + 1}] - You withdrew: $${Math.abs(movement)}`
//     );
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key} : ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, key, map) => {
//   console.log(`${key} : ${value}`);
// });

//MAP

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(ele => ele * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement [${i + 1}] - You ${
//       mov > 0 ? `deposited` : `withdrew`
//     }: $${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// const deposits = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];

// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

// const withdrawls = movements.filter(mov => mov < 0);

// console.log(withdrawls);

// console.log(movements);
// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

// console.log(balance);

// let balance2 = 0;

// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// //MAX VALUE
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : (acc = mov)),
//   movements[0]
// );

// console.log(max);

// CHALLENGE 1 - Arrays
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = (dogsJulia, dogsKate) => {
//   const correctedArray = [...dogsJulia.slice(1, -2), ...dogsKate];

//   correctedArray.forEach((ele, i) => {
//     console.log(
//       `Dog number ${i + 1} is ${
//         ele >= 3 ? `an adult, and ${ele} years old.` : 'is still a puppy 🐶.'
//       }`
//     );
//   });
// };

// checkDogs(dogsJulia, dogsKate);
// checkDogs(dogsJulia2, dogsKate2);

// const calcAverageHumanAge = ages => {
//   let humanAge = [];
//   ages.forEach((ele, i) => {
//     if (ele <= 2) {
//       if (ele * 2 >= 19) humanAge.push(ele * 2);
//     } else {
//       if (16 + ele * 4 >= 19) humanAge.push(16 + ele * 4);
//     }
//   });

//   return humanAge;
// };

// //Challenege 3
// const calcAverageHumanAgev2 = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// //

// const dogsAgeData1 = [5, 2, 4, 1, 15, 8, 3];
// const dogsAgeData2 = [16, 6, 10, 5, 6, 1, 4];

// // const result1 = calcAverageHumanAge(dogsAgeData1);
// // const result2 = calcAverageHumanAge(dogsAgeData2);
// const result3 = calcAverageHumanAgev2([5, 2, 4, 1, 15, 8, 3]);
// const result4 = calcAverageHumanAgev2(dogsAgeData2);

// // console.log(result1);
// // console.log(result2);
// // console.log(result3);
// // console.log(result4);
// // const averageDogAge1 = result1.filter(age => age >= 28);

// // const averageResult1 =
// //   averageDogAge1.reduce((acc, ele) => acc + ele, 0) / averageDogAge1.length;
// // const averageDogAge2 = result2.filter(age => age >= 28);

// // const averageResult2 =
// //   averageDogAge2.reduce((acc, ele) => acc + ele, 0) / averageDogAge2.length;

// // console.log(result1);
// // console.log(averageDogAge1);
// // console.log(averageResult1);
// // console.log(result2);
// // console.log(averageDogAge2);
// // console.log(averageResult2);
// // console.log(calcAverageHumanAge(dogsAgeData1));

// //Piperline
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// // console.log(totalDepositsUSD);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);

// console.log(account);
