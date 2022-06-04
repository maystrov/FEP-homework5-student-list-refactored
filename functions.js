const marksValue = 5;
const studentsValue = prompt('Enter the number of students:');

// let studentsList = studentsMock.getStudentsList(studentsValue);


// ***** Генерация первичного списка студентов
function getStudentsList(someStudentsValue) {
    let studentsList = [];
        for (let i = 0; i < someStudentsValue; i++) {
            studentsList[i] = {
                name: prompt(`Enter ${i + 1} student\'s name`),
                marks: getMarksManual(marksValue),
            }
        }
    return studentsList;
};
let studentsList = getStudentsList(studentsValue);
let students = getAvgRate(studentsList);


// ******** Нахождение средней оценки для каждого студента и вывод нового списка студентов
function getAvgRate(someStudentsList) {
    for (let student of someStudentsList) {
        student.avgRate = getAvgRateForOne(student);
    }
    return someStudentsList;
}


// ******** Нахождение средней оценки для одного студента
function getAvgRateForOne(someStudent) {
    let sumMarks = 0;
    for (let mark of someStudent.marks) {
        sumMarks += mark;
    }
    someStudent.avgRate = Math.trunc(sumMarks / marksValue * 100) / 100;
    return someStudent.avgRate;
}

// ***** Генерация масcива оценок автоматически
function getMarksArr(someMarksValue) {
    let marks = []
    for (let i = 0; i < someMarksValue; i++) {
        marks[i] = getRandomInt(0, 13);
    }
    return marks;
}
// const marks = getMarksArr(studentsValue);


// ***** Ввод оценок студента вручную :
function getMarksManual(someMarksValue) {
    let marksString = prompt('Введите через запятую ' + someMarksValue + ' оценок студента');
    marksString = marksString.split(',', someMarksValue);
    let marks = [];
    for (let i = 0; i < someMarksValue; i++) {
        marks.push(+marksString[i]);
    }
    return marks;
} 
// const marks = getMarksArr(marksValue);


// ***** Генерация случайной оценки от 0 до 12
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//   ******** Поиск лучшего студента по среднему баллу:
function getBestStudent(students) {
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (bestStudent.avgRate < students[i].avgRate)
            bestStudent = students[i];
    }
    return bestStudent.name;
}

// *****  Список должников
function getDebtors(students) {
    let debtors = [];
    for (let student of students) {
        if (student.avgRate < 5)
            debtors[debtors.length] = student;
    }
    return debtors;
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

// ******** Новенький
function getNewStudent(someStudentsList) {
    let newStudent = {
        name: prompt(`Enter new student\'s name :`),
        marks: getMarksManual(marksValue),
    }
    newStudent.avgRate = getAvgRateForOne(newStudent);
    someStudentsList[someStudentsList.length] = newStudent;
    return someStudentsList;
};






