/*
Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией

Функция принимает еще два параметра n и m

Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
1. Добавить 2 параметра в функцию
2.Эти два параметра это диапазон- написать метод или функцию
3.диапазон для всего массива
4. может быть n > m или n < m.

*/
const numbersArr2 = [];
const test2 = (tested,lenght,min,max) => {
    let newArr = tested;
    let dlina = lenght;
    min = Math.ceil(min);
    max = Math.floor(max);
    for ( i = 0; i < dlina; i++ ) {
        newArr.push(Math.floor((Math.random() * (max - min + 1)) + min));
    }
    return newArr;
}
console.log(test2(numbersArr2,prompt(),prompt(`min`),prompt(`max`)));
