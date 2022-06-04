const marksValue = 10;
const studentsValue = +prompt('Enter the number of students:');
// const studentsValue = 5;
// const newStudent = studentsMock.getStudent();
// console.log(newStudent);

const studentsList = studentsMock.getStudentList(studentsValue);
// console.table(studentsList);

let students = getAvgRate(studentsList);

// ******** Нахождение средней оценки для одного студента
function getAvgRateForOne(someStudent) {
    let sumMarks = 0;
    for (let mark of someStudent.marks) {
        sumMarks += mark;
    }
    
    someStudent.avgRate = Math.trunc(sumMarks / marksValue * 100) / 100;
    return someStudent.avgRate;
}
// console.log(getAvgRateForOne(studentsList[0]));


// ******** Нахождение средней оценки для каждого студента и вывод нового списка студентов
function getAvgRate(someStudentsList) {
    for (let student of someStudentsList) {
        student.avgRate = getAvgRateForOne(student);
        console.log()
    }
    return someStudentsList;
}
// let students = getAvgRate(studentsList);
// console.table(getAvgRate(studentsList))


// ***** Ввод оценок студента вручную :
function getMarksManual(someMarksValue) {
    let marksString = prompt('Введите через запятую ' + someMarksValue + ' оценки студента');
    marksString = marksString.split(',', someMarksValue);
    let marks = [];
    for (let i = 0; i < someMarksValue; i++) {
        marks.push(+marksString[i]);
    }
    return marks;
} 
// const marks = getMarksArr(marksValue);


//   ******** Поиск лучшего студента по среднему баллу:
function getBestStudent(students) {
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (bestStudent.avgRate < students[i].avgRate)
            bestStudent = students[i];
    }
    return bestStudent.name;
}


//  Сортировка студентов по успеваемости
function getSortedGradeList(students) {
    for (let k = 0; k < students.length; k++) {
        for (let i = 0; i < students.length - 1 - k; i++) {
            if (students[i].avgRate < students[i + 1].avgRate) {
                const buff = students[i];
                students[i] = students[i + 1];
                students[i + 1] = buff;
            }
        }
    }
    return students;
}


// *****  Список должников
function getDebtors(students) {
    let debtors = [];
    for (let student of students) {
        if (student.avgRate < 60)
            debtors[debtors.length] = student;
    }
    return debtors;
}

// ******** Новенький

function getNewStudent(someStudentsList) {
    let newStudent = studentsMock.getStudent(marksValue);
    newStudent.avgRate = getAvgRateForOne(newStudent);
    someStudentsList[someStudentsList.length] = newStudent;
    return someStudentsList;
};
