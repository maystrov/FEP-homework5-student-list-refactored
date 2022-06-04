"use strict";

function main() {

    do {
        // *****  Предлагаем пользователю выбрать операцию с массивом

        const operation = +prompt(`Choose your operation:
        1. Find best student
        2. Grade list
        3. Average mark
        4. Debtors list
        5. Add new student
    `);

        switch (operation) {
            case 1:
                console.table(studentsList);
                console.log(`The best student is ${getBestStudent(students)}\n\n\n`);
                break;
            case 2:
                console.log(`Sorted students grade list:`)
                console.table(getSortedGradeList(students));
                break;
            case 3:
                console.log(`\n\n\nStudents list with average marks:`)
                console.table(getAvgRate(studentsList));
                break;
            case 4:
                console.table(students);
                console.log(`\n\n\nDebtors list:`);
                console.table(getDebtors(students));
                break;
            case 5:
                console.table(students);
                console.log(`\n\n\nStudents list with a new student:`)
                console.table(getNewStudent(students));
                break;
           
        }
    } while (confirm('Do you want to continue operations?'));
}
main();





