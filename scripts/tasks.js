const whether = Math.round(Math.random());
if (whether === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
}
if (whether === 0) {
    console.log('Дождя нет!')
} else {
    console.log('Вы ввели некорректные данные');
}

const math =  prompt('Математика:');
const history = (prompt('История:'));
const english = prompt('Английский язык:');

if ((math + history + english)>=265){
    console.log('Поздравляю, вы поступили на бюджет!');
}

const money = prompt('Какую сумму желаете снять?');
if (money % 100 === 0){
    console.log('Получите ваши денежки');
} else {
    console.log('В банкомате отсутствуют нужные купюры');
}