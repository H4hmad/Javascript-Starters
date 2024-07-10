const markMassd1 = 78;
const johnMassd1 = 92;

const markHeightd1 = 1.69;
const johnHeightd1 = 1.95;

const bmiMarkd1 = markMassd1 / markHeightd1 ** 2;
const bmiJohnd1 = johnMassd1 / johnHeightd1 ** 2;

const markHigherBMId1 = bmiMarkd1 > bmiJohnd1;

const markMassd2 = 95;
const johnMassd2 = 85;

const markHeightd2 = 1.88;
const johnHeightd2 = 1.76;

const bmiMarkd2 = markMassd2 / markHeightd2 ** 2;
const bmiJohnd2 = johnMassd2 / johnHeightd2 ** 2;

const markHigherBMId2 = bmiMarkd2 > bmiJohnd2;

console.log(
  `For the first data set the answer is ${markHigherBMId1}. Whereas for the second data set the answer is ${markHigherBMId2}`
);
