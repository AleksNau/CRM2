'use strict'
const randomMassive = [];

function randomZeroTen(massive) {
  const number = Math.round(Math.random() * 10);
  const randomNumbers = massive;
  randomNumbers.push(number);
  if ((randomNumbers.reduce((a, b) => a + b, 0) < 50)) {
    return randomZeroTen(randomNumbers);
  }
  return randomNumbers;
}

console.log(randomZeroTen(randomMassive));
