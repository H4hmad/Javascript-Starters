'use strict';

//Setting up for the coding challenege 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registeredNewAnswer() {
    let choosenAnswer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    if (choosenAnswer >= 0 && choosenAnswer < 4) {
      this.answers[choosenAnswer]++;
    } else {
      prompt(`Please enter a valid input!`);
      return registeredNewAnswer();
    }
    this.displayResults();
    this.displayResults(`string`);
  },

  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`,`)}`);
    }
  },
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registeredNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//Data 1: [5, 2, 3]
//Data 2: [1, 5, 3, 9, 6, 1]
