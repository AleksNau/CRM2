const  modifyString = (phrase) => {
    let a = phrase;
    a = a.toLowerCase();
    return a[0].toUpperCase() + a.slice(1);
}
const string = modifyString(prompt('Введите фразу'));
console.log(string);

/*
* Напишите функцию isPrime.

Она принимает число и возвращает true, если число является простым, а в ином случае false.



Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.

Например, 5 - простое число, так как делится без остатка только на 1 и на себя.

151, 911, 1987 - так же простые числа

Используйте цикл for в функции

* */

let n = prompt();


for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue ; // не подходит, берём следующее
    }

    console.log( i ); // простое число
}

function isPrime(num) {
    let memory = true;

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(`Делиться на ${i}`)
                memory = false;
            }
        }
    } else memory = false

    return memory;

}

console.log(isPrime(65));