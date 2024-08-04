const dolphinsAverageD1 = (96 + 108 + 90) / 3;
const koalasAverageD1 = (88 + 91 + 110) / 3;

const dolphinsAverageD2 = (97 + 112 + 101) / 3;
const koalasAverageD2 = (109 + 95 + 123) / 3;

const dolphinsAverageD3 = (97 + 112 + 101) / 3;
const koalasAverageD3 = (109 + 95 + 106) / 3;

if (dolphinsAverageD1 > koalasAverageD1) {
  console.log(`Dolphins Win!!! Congratulations !~!~!~!`);
} else if (dolphinsAverageD1 === koalasAverageD1) {
  console.log(`It's a Draw !~!~!~!`);
} else {
  console.log(`Koalas Win!!! Congratulations !~!~!~!`);
}

// Bonus 1
if (dolphinsAverageD2 > koalasAverageD2) {
  if (dolphinsAverageD2 >= 100) {
    console.log(`Dolphins Win!!! Congratulations !~!~!~!`);
  } else {
    console.log(`Score less than 100. Lost!!!`);
  }
} else if (dolphinsAverageD2 === koalasAverageD2) {
  console.log(`It's a Draw !~!~!~!`);
} else {
  if (koalasAverageD2 > 100) {
    console.log(`Koalas Win!!! Congratulations !~!~!~!`);
  } else {
    console.log(`It's a shame!, score is less than 100`);
  }
}

// Bonus 2
if (dolphinsAverageD3 > koalasAverageD3) {
  if (dolphinsAverageD3 >= 100) {
    console.log(`Dolphins Win!!! Congratulations !~!~!~!`);
  } else {
    console.log(`Score less than 100. Lost!!!`);
  }
} else if (dolphinsAverageD3 === koalasAverageD3) {
  if (dolphinsAverageD3 >= 100 && koalasAverageD3 >= 100) {
    console.log(`It's a Draw !~!~!~!`);
  } else {
    console.log(
      `Scores of both teams need to be above 100 for a draw to happen.`
    );
  }
} else {
  if (koalasAverageD3 > 100) {
    console.log(`Koalas Win!!! Congratulations !~!~!~!`);
  } else {
    console.log(`It's a shame!, score is less than 100`);
  }
}
