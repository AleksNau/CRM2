/*
Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


 4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел
1. Сделать метод определения четности и нечетности
2. Сделать так чтобы массив заполнялся согласно условию четности и нечетности
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