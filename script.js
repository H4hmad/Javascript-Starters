const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  `${john.firstName}'s BMI (${john.bmi()}) is ${
    john.bmi() > mark.bmi() ? "higher" : "lower"
  } than ${mark.firstName}'s BMI (${mark.bmi()}).`
);
