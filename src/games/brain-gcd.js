import playGame from '../index.js';

import { getRandomNumber, isDivisorOf } from '../utils.js';
import { GameRules } from '../consts.js';

const rules = GameRules.BRAIN_GCD;

function playBrainGcd() {
  const makeRiddle = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const question = `${number1} ${number2}`;
    let solution = 1;
    for (let d = 2; d <= Math.min(number1, number2); d += 1) {
      if (isDivisorOf(d, number1) && isDivisorOf(d, number2)) {
        solution = d;
      }
    }
    solution = String(solution);

    return [question, solution];
  };

  playGame(rules, makeRiddle);
}

export default playBrainGcd;
