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

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

gameEvents.delete(64);
const size = gameEvents.size;
console.log(`An event happened, on average, every ${90 / size} minutes.`);
// console.log(gameEvents.size);
console.log(gameEvents.entries());
const events = new Set([...gameEvents.values()]);
console.log(events);

// console.log(gameEvents.get(...gameEvents.keys()));
// let i = 0;
for (const x of gameEvents.entries()) {
  console.log(`${x[0] > 45 ? '[SECOND HALF]' : '[FIRST HALF]'} ${x}`);
  // i++;
}
console.log('\n\n');
//Alternative approach
// let x = 0;
for (const [key, value] of gameEvents.entries()) {
  // console.log(key, value);
  console.log(`${key > 45 ? '[SECOND HALF]' : '[FIRST HALF]'} ${key} ${value}`);
  // i++;
}
