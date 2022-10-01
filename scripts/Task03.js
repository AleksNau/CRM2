const generate = (length, min, max, code) => Array(length).fill().map(() => {
    let item = Math.round((Math.random() * (max - min)) + min);
    if (code === 'even') {
        if (item % 2 !== 0 && item > 0) {
            item += 1;
        }
        if (item % 2 !== 0 && item < 0) {
            item -= 1;
        }
        if (item === -0 ) {
            item = Math.abs(item);
        }
    }
    if (code === 'odd') {
        if (item % 2 === 0 && item > 0) {
            item -= 1;
        }
        else if (item % 2 === 0 && item < 0) {
            item += 1;
        }
        else if (item === -0 ) {
            item = Math.abs(item);
        }
}
    return item;
})

console.log(generate(100,-10,10,`odd`),);