const incomePro =  prompt('Какой у вас доход про');
let tax = 0;
if (incomePro > 50000) {
    tax = (incomePro % 50000 * 0.3) + 35000 * 0.2 + 15000 * 0.13;
    console.log(tax);
} else if (incomePro >= 15000 && incomePro <= 50000) {
    tax = (incomePro - 15000) * 0.2 + 15000 * 0.13;
    console.log(tax);
} else if (income < 0) {
    console.log('Вы ввели некоректные данные');
}  else {
    tax = incomePro * 0.13;
    console.log(tax);
}
