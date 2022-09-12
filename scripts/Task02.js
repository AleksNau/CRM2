function isPrime(num) {
    let memory = true;

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                memory = false;
            }
        }
    } else memory = false

    return memory;

}
const rightNumber = isPrime(prompt('Введите число'));
console.log(rightNumber);