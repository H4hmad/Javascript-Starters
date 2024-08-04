"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins}).`);
  } else {
    console.log(
      `It's either a draw or the conditions for victory haven't been achieved. Scores are (${avgDolphins} vs ${avgKoalas}).`
    );
  }
};

const avgDolphinsD1 = calcAverage(44, 23, 71);
const avgKoalasD1 = calcAverage(65, 54, 49);
checkWinner(avgDolphinsD1, avgKoalasD1);

const avgDolphinsD2 = calcAverage(85, 54, 41);
const avgKoalasD2 = calcAverage(23, 34, 27);
checkWinner(avgDolphinsD2, avgKoalasD2);
