const randomMassive = [];

function randomZeroTen(massive) {
    const number = Math.round(Math.random() * 10);
    const rid = massive;
    rid.push(number);
    if ((rid.reduce((a, b) => a + b, 0) < 50)){
        return randomZeroTen(rid);
    }
    return rid;
}

console.log(randomZeroTen(randomMassive));