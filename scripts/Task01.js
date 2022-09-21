const convertToEuro = (money) => {
    let rub = money;
    rub *= 1.2 * 73;
    return Math.round(rub);
}

const money = convertToEuro(prompt('какую сумму хотите конвертировать?'));
console.log(money);