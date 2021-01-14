const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(students => students.grade >= 7);    
}

console.log('\nLista de Alunos: ')
console.log(students);

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));
