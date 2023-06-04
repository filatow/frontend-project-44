import { requestName } from './utils.js';

function printCommonGreetings() {
  console.log('Welcome to the Brain Games!');
}

function sayHelloTo(name) {
  console.log(`Hello, ${name}!`);
}

function getAcquainted() {
  printCommonGreetings();
  const name = requestName();
  sayHelloTo(name);

  return name;
}

export default getAcquainted;
