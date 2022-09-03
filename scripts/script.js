const productName =  prompt('Наименование товара:');
const productAmount = +(prompt('Количество товара:'));
const productCategory = prompt('Категория товара:');
const productPrice = +(prompt('Цена товара:'));
const productSumPrice = productAmount * productPrice;

console.log(`Наименование товара: ${productName}`);
console.log(`Общая сумма товаров: ${productSumPrice}р`);
console.log(typeof productPrice);
console.log(`На складе ${productAmount} единиц(ы) товара "${productName}" на сумму ${productSumPrice} деревянных`)