//definirati sucelje Student koji ima polja
//firstName: string, lastName: string, grade: number,isActive:boolean
//napisati funkciju getActiveStudents
//prima niz Student[], vraca samo one studente cije je isActive === true
//napisati funckiju calculateAverageGrade koja
//prima niz Student[], racuna i vraca prosjecnu ocjena svih aktivnih studenana
function getActiveStudents(students) {
    return students.filter(function (student) { return student.isActive; });
}
function calculateAverageGrade(students) {
    var activeStudents = getActiveStudents(students);
    if (activeStudents.length === 0) {
        return 0;
    }
    var totalGrades = activeStudents.reduce(function (sum, student) { return sum + student.grade; }, 0);
    return totalGrades / activeStudents.length;
}
var students = [
    { firstName: "Ana", lastName: "Ivić", grade: 4.5, isActive: true },
    { firstName: "Marko", lastName: "Marić", grade: 3.8, isActive: false },
    { firstName: "Lana", lastName: "Horvat", grade: 5.0, isActive: true },
    { firstName: "Ivan", lastName: "Novak", grade: 2.9, isActive: false },
    { firstName: "Petra", lastName: "Kovač", grade: 4.2, isActive: true },
];
var activeStudents = getActiveStudents(students);
console.log("Aktivni studenti:");
console.log(activeStudents);
var averageGrade = calculateAverageGrade(students);
console.log("Prosječna ocjena aktivnih studenata:", averageGrade.toFixed(2));
