'use strict';
const value = Math.ceil(Math.random() * 100);

function rightNumber(randomNumber) {
  const userInput = prompt('Введите число');
  const userNumber = +userInput;
  if (isNaN(userInput)) {
    alert('Нужно писать число!');
  } else {
    if (value < userNumber) {
      alert('Меньше!');
      return rightNumber();
    } else if (value > userNumber) {
      alert('Больше!');
      return rightNumber();
    } else if (userNumber === value) {
      return alert('Правильно!');
    }
  }
}

rightNumber();
