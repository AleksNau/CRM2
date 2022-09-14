const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
let a = 0;

const getAverageValue = () => {
    for (let i = 0; i <allCashbox.length; i++) {
        a += allCashbox[i];
    }
    a = a / allCashbox.length;

    return a;
}

const average = getAverageValue(allCashbox);
console.log(average);