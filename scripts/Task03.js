const calculate = (sum = 0,mount = 0,promo = '') => {
    let amount = mount;
    let price = sum;
    let code = promo;
    if (amount > 10){
        price = price - (price * 0.03);
        if (price > 30000) {
        price = price - ((price - 30000) * 0.15);
            if (code === 'METHED'){
            price = price - (price * 0.1);
            return price;
            }  else if (code === 'G3H2Z1'&& price > 2000) {
            price = price - 500;
            return price;
            }
        return price;
        }
    return price;
    }
    else if (price > 30000) {
        price = price - ((price - 30000) * 0.15);
        if (code === 'METHED'){
            price = price - (price * 0.1);
            return price;
        }  else if (code === 'G3H2Z1' && price > 2000) {
            price = price - 500;
            return price;
        }
        return price;
    } else if (code === 'METHED'){
        price = price - (price * 0.1);
        return price;
    }  else if (code === 'G3H2Z1' && price > 2000) {
        price = price - 500;
        return price;
    }

    return price;
}

const finalPrice = calculate( prompt('сумма?'),prompt('количество товаров'),prompt('промокод'));
console.log('Финальная стоимость:',  finalPrice);