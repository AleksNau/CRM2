const numbersArr = [];

const test = (tested, lenght) => {
    let newArr = tested;
    for ( i = 0; i < lenght; i++ ) {
        newArr.push(Math.round(Math.random() * 100));
    }
    return newArr;
}

console.log(test(numbersArr, prompt(`Длина первого массива:`)));

