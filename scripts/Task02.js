const  modifyString = (phrase) => {
    let a = phrase;
    a = a.toLowerCase();
    return a[0].toUpperCase() + a.slice(1);
}
const string = modifyString(prompt('Введите фразу'));
console.log(string);
