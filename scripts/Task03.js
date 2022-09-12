let backString = (string) => {
    let b = '';
    for (a = string.length - 1 ;a >= 0; a--){
        b += string[a];
    }
    return b;
}
const reverseString = backString(prompt('Введите строку'));
console.log(reverseString);
