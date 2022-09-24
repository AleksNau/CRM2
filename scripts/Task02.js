const minMaxArr = [];

const minMaxFoo = (arr, lenght, min, max) => {
    let newArr = arr;
    min = Math.ceil(min);
    max = Math.floor(max);
    for ( i = 0; i < lenght; i++ ) {
        newArr.push(Math.floor((Math.random() * (max - min )) + min));
    }
    return newArr;
}
console.log(minMaxFoo(minMaxArr, 10, 10, -10));
