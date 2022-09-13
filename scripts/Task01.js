const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов'];

const whoFailed = (allStudents,failedStudents) => {
    const students = allStudents;
    const failed = failedStudents;
    const result = students.filter(i => !failed.includes(i));
    return result;
};
const result = whoFailed(allStudents,failedStudents);
console.log(result);

