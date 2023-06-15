import playGame from '../index.js';

import { getRandomNumber } from '../utils.js';
import { GameRules } from '../consts.js';

const rules = GameRules.BRAIN_PROGRESSION;

function playBrainProgression(minLen = 5, maxLen = 12, minDelta = 2, maxDelta = 5) {
  const makeRiddle = () => {
    const length = getRandomNumber(minLen, maxLen);
    const delta = getRandomNumber(minDelta, maxDelta);
    const first = getRandomNumber();

    const progression = [first];
    for (let i = 1; i < length; i += 1) {
      progression.push(progression[i - 1] + delta);
    }

    const indexToHide = getRandomNumber(0, length - 1);
    const solution = String(progression[indexToHide]);
    progression[indexToHide] = '..';
    const question = progression.join(' ');

    return [question, solution];
  };

  playGame(rules, makeRiddle);
}

export default playBrainProgression;
