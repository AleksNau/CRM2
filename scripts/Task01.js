const convertToEuro = (money) => {
    let finalSum = money;
    finalSum *= 1.2 * 73;
    finalSum.toFixed(2)
    return finalSum;
}

const money = convertToEuro(prompt('Цена в Евро'));
console.log(`Цена в рублях: `,money);