
const value = Math.ceil(Math.random() * 100);

function rightNumber(randomNumber) {
    while (true) {
        const userInput = prompt('Введите число');
        if (userInput === null) break;
        const userNumber = +userInput;

        if (isNaN(userNumber) || !isFinite(userNumber)) {
            alert('Введи число!');
            continue;
        }

        if (value < userNumber) {
            alert('Меньше!');
            continue;
        } else if (value > userNumber) {
            alert('Больше!');
            continue;
        } else if (userNumber === value) {
            alert('Правильно!');
            break;
        }
    }
}
rightNumber();