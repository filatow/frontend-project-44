import readlineSync from 'readline-sync';

import { SOLVE_TO_WIN } from './consts.js';
import getAcquainted from './greetings.js';

function playGame(gameRules, makeRiddle) {
  const name = getAcquainted();
  console.log(gameRules);

  // initial values
  let solvedCount = 0;

  // game loop
  while (solvedCount < SOLVE_TO_WIN) {
    const [question, solution] = makeRiddle();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === solution) {
      console.log('Correct!');
      solvedCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      break;
    }
  }

  // game result
  if (solvedCount === SOLVE_TO_WIN) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default playGame;
