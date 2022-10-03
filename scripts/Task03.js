const generate = (length, min, max, code) => Array(length).fill().map(() => {
    if (max > 0) {
        max -= 1;
    }
    let item = Math.round((Math.random() * (max - min)) + min);
        if (item % 2 !== 0  && code === 'even') {
            item += 1;
        }
        if (item % 2 === 0 && code === 'odd') {
            item += 1;
        }
        if (item === -0 ) {
            item = Math.abs(item);
        }

    return item;
})

console.log(generate(100,10,-10,`even`),);