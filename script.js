'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored!`);
};

printGoals('Dabies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');

for (const [goalNo, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNo + 1}: ${playerName}`);
}

let oddsTotal = 0;
for (const oddValues of Object.values(game.odds)) {
  oddsTotal += oddValues;
}
console.log(
  `The average odds is equal to: ${oddsTotal / Object.values(game.odds).length}`
);

for (const [teamNo, teamOdds] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${teamNo === 'x' ? `draw` : 'victory'} ${
      game[teamNo] ?? ''
    }: ${teamOdds}`
  );
}

const scoreres = {};

for (const player of game.scored) {
  scoreres[player] ? scoreres[player]++ : (scoreres[player] = 1);
  // console.log(scoreres[player]);
}

for (const [key, value] of Object.entries(scoreres)) {
  console.log(`Key: ${key} and Value: ${value}`);
}

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

console.log(...orderSet);

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are Close :(');

console.log(rest.get('name'));
console.log(rest);

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// rest.delete(2);
console.log(rest);

const arr = [1, 2];

rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));

// console.log(answer);

// if (question.get('correct') === answer) {
//   console.log(`Hooray!!! You got it right.`);
// } else {
//   console.log(`Try again next time.`);
// }

console.log([...question]);
