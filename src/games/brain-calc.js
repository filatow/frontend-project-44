import playGame from '../index.js';

import { getRandomNumber } from '../utils.js';
import { GameRules } from '../consts.js';

const rules = GameRules.BRAIN_CALC;

function playBrainCalc(operandMin = 1, operandMax = 10) {
  const makeRiddle = () => {
    const calculation = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    const operators = Object.keys(calculation);

    const operand1 = getRandomNumber(operandMin, operandMax);
    const operand2 = getRandomNumber(operandMin, operandMax);

    const operator = operators[getRandomNumber(0, operators.length)];

    const question = `${operand1} ${operator} ${operand2}`;
    const solution = `${calculation[operator](operand1, operand2)}`;

    return [question, solution];
  };

  playGame(rules, makeRiddle);
}

export default playBrainCalc;
