import playGame from '../index.js';

import { getRandomNumber, isEven } from '../utils.js';
import { GameRules } from '../consts.js';

const rules = GameRules.BRAIN_EVEN;

function playBrainEven() {
  const makeRiddle = () => {
    const question = getRandomNumber();
    const solution = isEven(question) ? 'yes' : 'no';

    return [question, solution];
  };

  playGame(rules, makeRiddle);
}

export default playBrainEven;
