const convertToEuro = (money) => {
    let rub = money;
    rub *= 73;
    return rub;
}

const money = convertToEuro(prompt('какую сумму хотите конвертировать?'));
console.log(money);