const markMassd1 = 78;
const johnMassd1 = 92;

const markHeightd1 = 1.69;
const johnHeightd1 = 1.95;

const bmiMarkd1 = markMassd1 / markHeightd1 ** 2;
const bmiJohnd1 = johnMassd1 / johnHeightd1 ** 2;

const markMassd2 = 95;
const johnMassd2 = 85;

const markHeightd2 = 1.88;
const johnHeightd2 = 1.76;

const bmiMarkd2 = markMassd2 / markHeightd2 ** 2;
const bmiJohnd2 = johnMassd2 / johnHeightd2 ** 2;

if (bmiMarkd1 > bmiJohnd1) {
  console.log(
    `In the first dataset, mark's (${bmiMarkd1}) BMI is higher than John's (${bmiJohnd1}) BMI.`
  );
} else if (bmiMarkd1 < bmiJohnd1) {
  console.log(
    `In the first dataset, mark's (${bmiMarkd1}) BMI is lower than John's (${bmiJohnd1}) BMI.`
  );
} else {
  console.log(
    `In the first dataset, mark's (${bmiMarkd1}) BMI is equal to John's (${bmiJohnd1}) BMI.`
  );
}

if (bmiMarkd2 > bmiJohnd2) {
  console.log(
    `In the second dataset, mark's (${bmiMarkd2}) BMI is higher than John's (${bmiJohnd2}) BMI.`
  );
} else if (bmiMarkd2 < bmiJohnd2) {
  console.log(
    `In the second dataset, mark's (${bmiMarkd2}) BMI is lower than John's (${bmiJohnd2}) BMI.`
  );
} else {
  console.log(
    `In the second dataset, mark's (${bmiMarkd2}) BMI is equal to John's (${bmiJohnd2}) BMI.`
  );
}
