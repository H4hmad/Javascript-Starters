const country = "Australia";
const continent = "Oeania";

const population = 26;

const isIsland = true;

const language = "English";

const halfCountryPopulation = population / 2;

console.log(
  `Now that the country is split in half, the population is also split in half, i-e ${halfCountryPopulation}`
);

console.log(
  `Increasing the population of my country by 1 will give ${
    population + 1
  } million`
);

const populationFinland = 6;

console.log(
  `Does finland have less population than my country? i-e ${population} ? ${populationFinland}. The answer is ${
    populationFinland < population
  }`
);

console.log(
  `Does an average country with 33 million people have more population than my country?. The answer is ${
    population < 33
  }`
);

const description = `${country} is in ${continent}, and its ${
  population / 2
} million people speak ${language}`;

console.log(description);
