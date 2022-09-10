const income = prompt('Какой у вас доход?');
if (income > 50000) {
    console.log('Ваша ставка 0.3. Сумма налога:',income * 0.3);
} else if (income >= 15000 && income <= 50000) {
    console.log('Ваша ставка 0.2. Сумма налога:',income * 0.2);
} else if (income < 0) {
    console.log('Вы ввели некоректные данные');
} else {
    console.log('Ваша ставка 0.1. Сумма налога:',income * 0.13);
}