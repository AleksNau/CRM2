const value = Math.ceil(Math.random() * 100);

function rightNumber(randomNumber) {
        const userInput = prompt('Введите число');
        const userNumber = +userInput;
        if (userInput != NaN){
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