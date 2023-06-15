import readlineSync from 'readline-sync';

export function requestName(question = 'May I have your name?: ') {
  return readlineSync.question(question);
}

export function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEven(number) {
  return number % 2 === 0;
}

export function isDivisorOf(valueToCheck, number) {
  return number % valueToCheck === 0;
}

export function isPrime(num) {
  if (num < 2) return false;

  for (let div = 2; div <= Math.sqrt(num); div += 1) {
    if (num % div === 0) return false;
  }

  return true;
}
