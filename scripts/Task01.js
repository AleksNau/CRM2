const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов'];
const result = allStudents.filter(i => !failedStudents.includes(i));
console.log(result);

