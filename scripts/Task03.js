const numbersEvenOdd = [];

const evenOddFoo = (arr, lenght, min, max, code) => {
    let newArr = arr;
    min = Math.ceil(min);
    max = Math.floor(max);
    let a;
    for ( i = 0; i < lenght; i++ ) {
        a = (Math.round((Math.random() * (max - min)) + min));
        newArr.push(a);
    }
    let map = newArr.map(function (item) {
        if (code === 'even') {
               if (item % 2 !== 0 && item > 0) {
                   item += 1;
               }
               else if (item % 2 !== 0 && item < 0) {
                    item -= 1;
                }
        }
        if (code === 'odd') {
             if (item % 2 === 0 && item > 0) {
                 item -= 1;
             }
             else if (item % 2 === 0 && item < 0) {
                 item += 1;
             }
    }
        return item;
})
return map;
}
console.log(evenOddFoo(numbersEvenOdd,100,10,-10,`even`));