import playGame from '../index.js';

import { getRandomNumber, isPrime } from '../utils.js';
import { GameRules } from '../consts.js';

const rules = GameRules.BRAIN_PRIME;

function playBrainPrime(minNumber = 1, maxNumber = 50) {
  const makeRiddle = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const question = String(number);
    const solution = isPrime(number) ? 'yes' : 'no';

    return [question, solution];
  };

  playGame(rules, makeRiddle);
}

export default playBrainPrime;
