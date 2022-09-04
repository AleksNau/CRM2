const incomePro =  prompt('Какой у вас доход');
if (incomePro>50000) {
    console.log('Ваша ставка 0.3. Сумма налога:',(incomePro-50000) * 0.3 + 35000 * 0.2 + 15000 * 0.13);
} else if(incomePro>=15000 && incomePro<=50000) {
    console.log('Ваша ставка 0.2. Сумма налога:',(incomePro-15000) * 0.2 + (15000 * 0.13));
} else {
    console.log('Ваша ставка 0.1. Сумма налога:',incomePro * 0.13);
}
