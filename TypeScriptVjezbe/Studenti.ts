//definirati sucelje Student koji ima polja
//firstName: string, lastName: string, grade: number,isActive:boolean
//napisati funkciju getActiveStudents
//prima niz Student[], vraca samo one studente cije je isActive === true
//napisati funckiju calculateAverageGrade koja
//prima niz Student[], racuna i vraca prosjecnu ocjena svih aktivnih studenana


interface Student {
  firstName: string;
  lastName: string;
  grade: number;
  isActive: boolean;
}

let students: Student[] = [
  { firstName: "Ana", lastName: "Ivić", grade: 4.5, isActive: true },
  { firstName: "Marko", lastName: "Marić", grade: 3.8, isActive: false },
  { firstName: "Lana", lastName: "Horvat", grade: 5.0, isActive: true },
  { firstName: "Ivan", lastName: "Novak", grade: 2.9, isActive: false },
  { firstName: "Petra", lastName: "Kovač", grade: 4.2, isActive: true },
];

let activeStudents = students.filter(student => student.isActive);

let averageGrade = 0;
if (activeStudents.length > 0) {
  let totalGrades = 0;
  for (let student of activeStudents) {
    totalGrades += student.grade;
  }
  averageGrade = totalGrades / activeStudents.length;
}

console.log("Aktivni studenti:", activeStudents);
console.log("Prosječna ocjena aktivnih studenata:", averageGrade);

