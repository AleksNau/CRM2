/*
Напишите функцию filter()

функция принимает в параметрах 2 массива

Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

Пример:
Результат функции: массив из всех студентов, которые сдали экзамен.
*/

const filter = (massive1, massive2) => {
    let firstMassive = massive1;
    let secondMassive = massive2;
    let finalMassive = [];
    for (let i=0;i<firstMassive.length;i++){
        if (firstMassive.includes(secondMassive[i])){
          finalMassive = firstMassive.delete(firstMassive[i]);
        }
    }
return finalMassive;
}
const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов'];
console.log(filter(allStudents,failedStudents));

