const numbersEvenOdd = [];

const evenOddFoo = (arr, lenght, min, max, code) => {
    let newArr = arr;
    min = Math.ceil(min);
    max = Math.floor(max);
    let a;

    if (code === 'even') {
        for ( i = 0; i < lenght; i++ ) {
            a = (Math.floor((Math.random() * (max - min + 1)) + min));
            if (a % 2 === 0) {
                newArr.push(a);
            } else {
               if (a > 0) {
                   a += 1;
               } else {
                   a -= 1;
               }
                newArr.push(a);
            }
        }
    }

    if (code === 'odd') {
        for ( i = 0; i < lenght; i++ ) {
            a = (Math.floor((Math.random() * (max - min + 1)) + min));
            if (a % 2 !== 0) {
                newArr.push(a);
            } else {
                if (a > 0) {
                    a -= 1;
                } else {
                    a += 1;
                }
                newArr.push(a);
            }
        }
    }
    return newArr;
}
console.log(evenOddFoo(numbersEvenOdd,prompt(`Длина третьего массива`),prompt(`min третьего массива`),prompt(`max третьего массива`),prompt(`even или odd`)));