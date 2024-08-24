'use strict';

//Challenge 3 - Data Structures
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
console.log(text);

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);

  let finalText = '';
  text.toLowerCase();
  finalText = text.split('\n');
  // console.log(finalText);
  let i = 1;
  for (let t of finalText) {
    const [first, second] = t.toLowerCase().trim().split('_');
    const output =
      `${first}${second.replace(second[0], second[0].toUpperCase())}`.padEnd(
        20,
        ' '
      ) + `✅`.repeat(i);
    console.log(output);
    i++;
  }
});
