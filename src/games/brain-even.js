import readlineSync from 'readline-sync';

import { getRandomNumber, isEven } from '../utils.js';
import getAcquainted from '../greetings.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const name = getAcquainted();
const needToSolve = 3;

function playBrainEven() {
  console.log(gameRules);

  // initial values
  let solvedCount = 0;

  // game loop
  while (solvedCount < needToSolve) {
    const number = getRandomNumber();
    const correct = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correct) {
      console.log('Correct!');
      solvedCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      break;
    }
  }

  // game result
  if (solvedCount === needToSolve) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default playBrainEven;
