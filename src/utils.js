import readlineSync from 'readline-sync';

export function requestName(question = 'May I have your name?: ') {
  return readlineSync.question(question);
}

export function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * max) + min;
}

export function isEven(number) {
  return number % 2 === 0;
}

export function isDivisorOf(valueToCheck, number) {
  return number % valueToCheck === 0;
}
