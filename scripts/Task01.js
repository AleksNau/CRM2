const convertToEuro = (money) => {
    let rub = money;
    rub *= 73;
    return rub;
}

const money = convertToEuro(prompt('какую сумму хотите конвертировать?'));
console.log(money);

/*Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения*/
for (let i = 2;i < 10;i++){
    console.log('------------');
    for (let y = 1;y<10; y++){
        console.log(`${i}**${y}=${i ** y}`);
    }
}
